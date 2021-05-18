import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, ListRenderItem, Platform } from 'react-native';
import { FlatList, HandlerStateChangeEvent, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { DiscoverMovie } from '../../contexts/interfaces';
import { Content, TitleCategory, ContainerAnimated } from './styles';
import { useSeriesContext } from '../../contexts/dataService/Series';
import LoadingImage from '../../components/LoadingImage';
import ItemList from '../../components/ItemList';
import { TitleMovie, ImageMovie, ContainerList } from '../../components/ItemList/styles';
import ItemBannerList from '../../components/ItemBannerList';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useAnimationContext } from '../../contexts/controls/AnimationContext';
const Home: React.FC = () => {
  const { movies, plusMovie, moviesTopRated, images, moviesAction } = useMovieContext();
  const { series, plusSeries } = useSeriesContext();
  const { animatedEvent, onHandlerStateChange, translateY, firstAnimation } = useAnimationContext();

  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ItemList translateY={translateY} movie={movie} list={movie.title ? "movie" : "serie"} />
  }
 
  useEffect(() => {
    if(moviesAction !== null) {
      firstAnimation()
    }
  }, [moviesAction])

  return <>
    {!movies && <Content>
      <LoadingImage />
    </Content>}

    {movies && moviesTopRated && series && <Container>
      <ItemBannerList translateY={translateY} movies={moviesTopRated.results} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >

        <ContainerAnimated style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 420],
              outputRange: [-50, 0, 420],
              extrapolate: "clamp"
            }),
          }]
        }}>
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

          <TitleCategory style={{ marginTop: Platform.OS === "web" ? -100 : -120 }}>Series</TitleCategory>
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
        </ContainerAnimated>
      </PanGestureHandler>
    </Container>}


  </>
}

export default React.memo(Home);