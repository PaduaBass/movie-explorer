import React, { useCallback, useState } from 'react';
import { DiscoverMovie } from '../../contexts/interfaces';

import { Container, Dot, ImageBanner, Row, TitleMovie } from './styles';
import * as Animatable from 'react-native-animatable';
import { Animated, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
interface ItemBannerListProps {
    movies: DiscoverMovie[];
    translateY: Animated.Value;
}

const ItemBannerList: React.FC<ItemBannerListProps> = ({ movies, translateY }) => {
    const [index, setIndex] = useState(0);
    const { navigate } = useNavigation();
    setTimeout(() => {
        if (index + 1 < movies.length) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }, 9000)

    return <Container style={{
        opacity: translateY.interpolate({
            inputRange: [0, 350],
            outputRange: [0, 1],
        })
    }}>
        <TouchableOpacity onPress={() => navigate('Details', movies[index])}>
        <ImageBanner
            loadingIndicatorSource={{ uri: `https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif` }}
            source={{ uri: `http://image.tmdb.org/t/p/w500/${movies[index].poster_path}`, cache: "only-if-cached" }}
            height={250} width={400}
            resizeMode={Platform.OS === "web" ? 'contain' : 'stretch'}
        />
        <TitleMovie style={{ color: "#fff" }}>{movies[index].title ? movies[index].title : movies[index].name}</TitleMovie>
        </TouchableOpacity>
        </Container >;
}

export default React.memo(ItemBannerList);