import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container/intex';
import Header from '../../components/Header';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { ContainerList, Content, ImageMovie, SeachInput, TitleCategory, TitleMovie, } from './styles';
import logo from '../../../assets/logo.jpeg';
const Home: React.FC = () => {
  const { movies, getData } = useMovieContext();
  useEffect(() => {
    getData();
  },[])
  const renderItem: ListRenderItem<DiscoverMovie> = ({item: movie}) => {
    return <ContainerList onPress={() => console.log(movie.id)}>
        <ImageMovie source={logo} height={250} width={250}/>
        <TitleMovie style={{ color: "#fff" }}>{movie.title}</TitleMovie>

    </ContainerList>
  }
  return <Container>
        {!movies && <Content>
          <ActivityIndicator color="#fff" size={60} />
        </Content>}
        <SeachInput 
          placeholder="Pesquise aqui!"
          placeholderTextColor="#fff"
        />
        <TitleCategory>Discover</TitleCategory>
        <FlatList
          data={movies ? movies.results : []}
          keyExtractor={(item) => String(item.id)}
          renderItem={(item) => renderItem(item)}
          horizontal
        />

  
  </Container>
}


export default Home;