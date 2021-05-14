import React, { useEffect } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Content, TitleCategory, BannerImage, ViewBackground, ContainerList } from './styles';
import { useSeriesContext } from '../../contexts/dataService/Series';
import LoadingImage from '../../components/LoadingImage';
import ItemList from '../../components/ItemList';
import { Dimensions } from 'react-native';
const Home: React.FC = () => {
  const { movies, getData, plusMovie, resetMovieSelected, moviesTopRated, plusMovieTopRated } = useMovieContext();
  const { series, getDataSeries, plusSeries } = useSeriesContext();

  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ItemList movie={movie} list={movie.title ? "movie" : "serie"} />
  }
  return <Container>
    {!movies && <Content>
      <LoadingImage />
    </Content>}

    {movies && moviesTopRated && series && <>
      <ViewBackground>
        <BannerImage
          source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${moviesTopRated.results[1].poster_path}` }}
          width={Dimensions.get('window').width}
          height={200}
        />
      </ViewBackground>
      <Content>
        <TitleCategory>Filmes</TitleCategory>
        <FlatList
          data={movies ? movies.results : []}
          keyExtractor={(item, index) => String(index)}
          renderItem={(item) => renderItem(item)}
          horizontal
          onEndReached={plusMovie}
          onEndReachedThreshold={0.3}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<LoadingImage />}
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
          ListFooterComponent={<LoadingImage />}
        />

      </Content>
    </>}


  </Container>
}

export default React.memo(Home);