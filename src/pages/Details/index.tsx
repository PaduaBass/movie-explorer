import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';

// import { Container } from './styles';

const Details: React.FC = () => {
    const movie = useRoute().params as DiscoverMovie;
    return <Container>
        <Image resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` }} height={250} width={250} />

        <Text>{movie.overview}</Text>

    </Container>;
}

export default Details;