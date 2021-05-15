import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground } from 'react-native';
import { DiscoverMovie } from '../../contexts/interfaces';
import { ContainerList, TitleMovie, ImageMovie, BackgroundImage } from './styles';

interface ItemListProps {
    movie: DiscoverMovie;
    grid?: boolean;
    list: string;
}
const ItemList: React.FC<ItemListProps> = ({ movie, grid, list }) => {
    const { navigate  } = useNavigation()

    return <ContainerList grid={grid} onPress={() => navigate('Details', movie)}>
        <ImageMovie
            loadingIndicatorSource={{ uri: `https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif` }}
            resizeMode="contain"
            source={{ uri: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`, cache: "only-if-cached"  }}
            height={250} width={250}
        />
        <TitleMovie style={{ color: "#fff" }}>{movie.title ? movie.title : movie.name}</TitleMovie>

    </ContainerList>;
}

export default React.memo(ItemList);