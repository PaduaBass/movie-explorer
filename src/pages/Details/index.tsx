import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Button, Content, ImageMovie, Main, Row, Text, TextTitle, TitleButton } from './styles';
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
        <Main>
            <Button onPress={() => {
                navigate('Player', movie)
            }}>
                <TitleButton>Assistir Trailers <Icon name="play" color="#fff" /></TitleButton>
            </Button>
            <Row>
                <TextTitle>Título: </TextTitle>
                <Text>{movie.name ? movie.name : movie.title}</Text>
            </Row>
            
            <TextTitle>Título</TextTitle>
            <Text>{movie.original_language}</Text>
            
            <TextTitle>Sobre</TextTitle>
            <Text>{movie.overview}</Text>
        </Main>

    </Container>;
}

export default Details;