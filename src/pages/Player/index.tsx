import React, { useEffect, useState } from 'react';
import { ListRenderItem, Platform, FlatList, Dimensions, Text } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { DiscoverMovie } from '../../contexts/interfaces';
import api from '../../services/api';
const window = Dimensions.get('window');
import { Container, ContainerPlayer, ContainerShimmer, ShimmerPlaceholder, YouTubeWebView } from './styles';

const Player: React.FC = () => {
    const movie = useRoute().params as DiscoverMovie;
    const [clips, setClips] = useState<any>(null);


    async function getVideoMovie() {
        if (movie.title) {
            const response = await api.get(`/movie/${movie.id}/videos?api_key=b7b1762c97b44651d52bbe7e7fc52f09`)
            setClips(response.data);

        } else {
            const response = await api.get(`/tv/${movie.id}/videos?api_key=b7b1762c97b44651d52bbe7e7fc52f09`)
            setClips(response.data);
        }
    }


    useEffect(() => {
        getVideoMovie();

    }, [])


    const renderItem: ListRenderItem<any> = ({ item: movie }) => {
        if (Platform.OS === "web") {
            return <ContainerPlayer>
                <ContainerShimmer>
                    <ShimmerPlaceholder  height={530} />
                </ContainerShimmer>
                <Text>
                    <iframe width={window.width} style={{ borderRadius: 4, marginTop: 10 }} height="600" src={`https://www.youtube.com/embed/${movie.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </Text>
            </ContainerPlayer>
        }
        return <ContainerPlayer>
            <ContainerShimmer>
                <ShimmerPlaceholder  />
            </ContainerShimmer>
            <YouTubeWebView key={String(movie.id)} play={false}  height={250}
                videoId={movie.key}
                webViewProps={{ renderToHardwareTextureAndroid: true, onTouchEnd: undefined, onTouchEndCapture: undefined }}
                onReady={() => { }}
                webViewStyle={{ borderRadius: 4 }}
                allowWebViewZoom={false}
            />
        </ContainerPlayer>
    }

    return <Container>
        <FlatList
            data={clips !== null ? clips.results : []}
            keyExtractor={(item, index) => String(index)}
            renderItem={(item) => renderItem(item)}
        />
    </Container>


}

export default Player;