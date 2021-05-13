import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { DiscoverMovie } from '../../contexts/interfaces';
import { ContainerList, TitleMovie, ImageMovie } from './styles';
interface ItemListProps {
    movie: DiscoverMovie;
}
const ItemList: React.FC<ItemListProps> = ({ movie }) => {
    const { navigate  } = useNavigation()
    return <ContainerList onPress={() => navigate('Details', movie)}>
        <ImageMovie
            loadingIndicatorSource={{ uri: `http://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
            resizeMode="contain"
            source={{ uri: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`, cache: "only-if-cached" }}
            height={250} width={250}
        />
        <TitleMovie style={{ color: "#fff" }}>{movie.title ? movie.title : movie.name}</TitleMovie>

    </ContainerList>;
}

export default React.memo(ItemList);