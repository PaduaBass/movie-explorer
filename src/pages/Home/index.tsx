import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { ContainerList, Content, ImageMovie, SeachInput, TitleCategory, TitleMovie, } from './styles';
import { useSeriesContext } from '../../contexts/dataService/Series';
import { useNavigation } from '@react-navigation/core';
const Home: React.FC = () => {
  const { movies, getData, plusMovie, selectMovie, resetMovieSelected, moviesTopRated, plusMovieTopRated } = useMovieContext();
  const { series, getDataSeries, plusSeries } = useSeriesContext();
  const { navigate } = useNavigation();
  useEffect(() => {
    getData();
    getDataSeries();
    resetMovieSelected();

  }, [])
  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ContainerList onPress={() => {
      navigate('Details', movie);
    }}>
      <ImageMovie resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} height={250} width={250} />
      <TitleMovie style={{ color: "#fff" }}>{movie.title ? movie.title : movie.name}</TitleMovie>

    </ContainerList>
  }
  return <Container>
    {!movies && <Content>
      <ActivityIndicator color="#fff" size={34} />
    </Content>}
    {/*      <SeachInput 
          placeholder="Pesquise aqui!"
          placeholderTextColor="#fff"
        /> */}
    {/*     <ImageMovie resizeMode="contain" source={{ uri: `https://image.tmdb.org/t/p/original/${movies?.results[0].poster_path}` }} height={250} width={250} />
 */}
  { movies && moviesTopRated && series && <>
    <TitleCategory>Top</TitleCategory>
    <FlatList
      data={moviesTopRated ? moviesTopRated.results : []}
      keyExtractor={(item, index) => String(index)}
      renderItem={(item) => renderItem(item)}
      horizontal
      onEndReached={plusMovieTopRated}
      onEndReachedThreshold={0.3}
      showsHorizontalScrollIndicator={false}
    />
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
      keyExtractor={(item, index) => String(index)}
      renderItem={(item) => renderItem(item)}
      horizontal
      showsHorizontalScrollIndicator={false}
      onEndReached={plusSeries}
      onEndReachedThreshold={0.3}
    />
  </>}


  </Container>
}


export default Home;