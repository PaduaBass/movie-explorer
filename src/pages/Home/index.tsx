import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container/intex';
import Header from '../../components/Header';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { ContainerList, Content, ImageMovie, SeachInput, TitleCategory, TitleMovie, } from './styles';
import logo from '../../../assets/logo.jpeg';
import { useSeriesContext } from '../../contexts/dataService/Series';
const Home: React.FC = () => {
  const { movies, getData, plusMovie } = useMovieContext();
  const { series, getDataSeries, plusSeries } = useSeriesContext();
  useEffect(() => {
    getData();
    getDataSeries();
  }, [])
  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ContainerList onPress={() => console.log(movie.id)}>
      <ImageMovie resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` }} height={250} width={250} />
      <TitleMovie style={{ color: "#fff" }}>{movie.original_title}</TitleMovie>

    </ContainerList>
  }
  return <Container>
    {!movies && <Content>
      <ActivityIndicator color="#fff" size={60} />
    </Content>}
    {/*      <SeachInput 
          placeholder="Pesquise aqui!"
          placeholderTextColor="#fff"
        /> */}
    <TitleCategory>Filmes</TitleCategory>
    <FlatList
      data={movies ? movies.results : []}
      keyExtractor={(item, index) => String(index)}
      renderItem={(item) => renderItem(item)}
      horizontal
      onEndReached={plusMovie}
      onEndReachedThreshold={0.3}
      showsHorizontalScrollIndicator={false}
    />

    <TitleCategory>Series</TitleCategory>
    <FlatList
      data={series ? series.results : []}
      keyExtractor={(item) => String(item.id)}
      renderItem={(item) => renderItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      onEndReached={plusSeries}
      onEndReachedThreshold={0.3}
    />


  </Container>
}


export default Home;