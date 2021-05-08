import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Button, Content, ImageMovie, Overview, TitleButton } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const window = Dimensions.get('window');


const Details: React.FC = () => {
    const movie = useRoute().params as DiscoverMovie;
    const { navigate } = useNavigation();
    return <Container>
        <Content>
            <ImageMovie resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` }} height={300} width={window.width} />
        </Content>
        <Button onPress={() => { 
            navigate('Player', movie)
        }}>
            <TitleButton>Assistir Trailers <Icon name="play" color="#fff" /></TitleButton>
        </Button>
        <Overview>{movie.overview}</Overview>
    </Container>;
}

export default Details;