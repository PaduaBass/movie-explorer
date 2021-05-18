import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Animated, ImageBackground } from 'react-native';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Container, ContainerList, TitleMovie, ImageMovie, BackgroundShimmer, TitleCategory } from './styles';

interface ItemListProps {
    movie: DiscoverMovie;
    grid?: boolean;
    list: string;
    translateY?: Animated.Value;
}
const ItemList: React.FC<ItemListProps> = ({ movie, grid, list, translateY }) => {
    const { navigate } = useNavigation()

    return <Container >
        <ContainerList grid={grid} onPress={() => navigate('Details', movie)}>
            <BackgroundShimmer  />
            <ImageMovie
                loadingIndicatorSource={{ uri: `https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif` }}
                resizeMode="stretch"
                source={{ uri: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`, cache: "only-if-cached" }}
                height={250} width={250}
            />
            <TitleMovie style={{ color: "#fff" }}>{movie.title ? movie.title : movie.name}</TitleMovie>

        </ContainerList>
    </Container>;
}

export default React.memo(ItemList);