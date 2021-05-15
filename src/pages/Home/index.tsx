import React, { useEffect } from 'react';
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
const Home: React.FC = () => {
  const { movies, plusMovie, moviesTopRated, images } = useMovieContext();
  const { series, plusSeries } = useSeriesContext();

  let offset = 0;
  const translateY = new Animated.Value(0);
  const firstAnim = Animated.timing(translateY, {
    toValue: 420,
    duration: Platform.OS === "web" ? 1500 : 1000,
    useNativeDriver: true,
    delay: Platform.OS === "web" ? 1500 : 500,
  });
  firstAnim.start(() => {
    offset = 420;
    translateY.setOffset(offset);
    translateY.setValue(0);
  });
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        },
      },
    ],
    { useNativeDriver: true, },
  );

  function onHandlerStateChange (event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) {
    if(event.nativeEvent.oldState === State.ACTIVE) {
      let oppened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if(translationY >= 100) {
        oppened = true
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: oppened ? 420 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = oppened ? 420 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const renderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
    return <ItemList movie={movie} list={movie.title ? "movie" : "serie"} />
  }

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

        <ContainerAnimated style={{ transform: [{ translateY: translateY.interpolate({
          inputRange: [-350, 0, 420],
          outputRange: [-50, 0, 420],
          extrapolate: "clamp"
        }), }] }}>
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
          
        
        </ContainerAnimated>
      </PanGestureHandler>
    </Container>}


  </>
}

export default React.memo(Home);