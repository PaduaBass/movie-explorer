import React, { useEffect } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Content, TitleCategory } from './styles';
import { useSeriesContext } from '../../contexts/dataService/Series';
import LoadingImage from '../../components/LoadingImage';
import ItemList from '../../components/ItemList';
import { Dimensions } from 'react-native';
const Home: React.FC = () => {
  const { movies, getData, plusMovie, resetMovieSelected, moviesTopRated } = useMovieContext();
  const { series, getDataSeries, plusSeries } = useSeriesContext();
 
  console.log("Render Home")
  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ItemList movie={movie} list={movie.title ? "movie" : "serie"} />
  }
  return <Container>
    {!movies && <Content>
      <LoadingImage />
    </Content>}

    {movies && moviesTopRated && series && <>
      <Content>
        <TitleCategory>Filmes</TitleCategory>
        <FlatList
          data={movies ? movies.results : []}
          keyExtractor={(item, index) => String(index)}
          renderItem={(item) => renderItem(item)}
          onEndReached={plusMovie}
          onEndReachedThreshold={0.3}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<LoadingImage />}
        />

        <TitleCategory>Series</TitleCategory>
        <FlatList
          data={series ? series.results : []}
          keyExtractor={(item, index) => String(index)}
          renderItem={(item) => renderItem(item)}
          showsHorizontalScrollIndicator={false}
          onEndReached={plusSeries}
          onEndReachedThreshold={0.3}
          horizontal
          ListFooterComponent={<LoadingImage />}
        />

      </Content>
    </>}


  </Container>
}

export default React.memo(Home);