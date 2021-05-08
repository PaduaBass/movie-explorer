import React, { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, ListRenderItem, View, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useRoute } from '@react-navigation/core';
import { DiscoverMovie } from '../../contexts/interfaces';
import video from '../../../assets/video.mp4';
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import api from '../../services/api';
const window = Dimensions.get('window');

import { Container } from './styles';

const Player: React.FC = () => {
    const playerRef = useRef<YoutubeIframeRef>(null);

    const movie = useRoute().params as DiscoverMovie;
    const [clips, setClips] = useState<any>(null);
    useEffect(() => {
        async function getVideoMovie() {
            if (movie.title) {
                const response = await api.get(`/movie/${movie.id}/videos?api_key=b7b1762c97b44651d52bbe7e7fc52f09`)
                setClips(response.data);
                console.log(clips.results);

            } else {
                const response = await api.get(`/tv/${movie.id}/videos?api_key=b7b1762c97b44651d52bbe7e7fc52f09`)
                setClips(response.data);
            }
        }
        getVideoMovie();
    }, [])

    const renderItem: ListRenderItem<any> = ({ item: movie }) => {
        return <>
            <YoutubePlayer key={String(movie.id)} play={false} width={window.width} height={250}
                videoId={movie.key}
                webViewProps={{ renderToHardwareTextureAndroid: true, onTouchEnd: undefined, onTouchEndCapture: undefined  }}
            />
        </>
    }

    return <Container>
        <FlatList
            data={clips ? clips.results : []}
            keyExtractor={(item, index) => String(index)}
            renderItem={(item) => renderItem(item)}
            
        />
    </Container>


}

export default Player;