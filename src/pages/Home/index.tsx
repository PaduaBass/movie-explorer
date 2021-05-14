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
import { SliderBox } from "react-native-image-slider-box";
import { TitleMovie, ImageMovie, ContainerList } from '../../components/ItemList/styles';
const Home: React.FC = () => {
  const { movies, plusMovie, moviesTopRated, images } = useMovieContext();
  const { series, plusSeries } = useSeriesContext();
  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ItemList movie={movie} list={movie.title ? "movie" : "serie"} />
  }

  const renderItemWeb: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ContainerList>
      <ImageMovie
        loadingIndicatorSource={{ uri: `https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif` }}
        resizeMode="contain"
        source={{ uri: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`, cache: "only-if-cached" }}
        height={250} width={250}
      />
      <TitleMovie >{movie.name}</TitleMovie>
    </ContainerList>
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
          removeClippedSubviews
          maxToRenderPerBatch={20}
          initialNumToRender={10}
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
          removeClippedSubviews
          maxToRenderPerBatch={20}
          initialNumToRender={10}
        />

      </Content>
    </>}


  </Container>
}

export default React.memo(Home);