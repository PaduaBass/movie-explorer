import React, { useEffect, useState } from 'react';
import { ListRenderItem, View } from 'react-native';
import { useDraweContext } from '../../contexts/components/DrawerContext';
import * as Animatable from 'react-native-animatable';
import { Background, BoxContainer, Container, List, TextBox, TitleDrawer } from './styles';
import { useGenresContext, Genre } from '../../contexts/dataService/Genres';
import { FlatList } from 'react-native-gesture-handler';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { useSeriesContext } from '../../contexts/dataService/Series';
const BackgroundOpacity = Animatable.createAnimatableComponent(Background);
const ContainerAnimated = Animatable.createAnimatableComponent(Container);

const Drawer: React.FC = () => {
    const { openCloseDrawer } = useDraweContext();
    const [close, setClose] = useState(false);
    const { genresMovie, genresTv } = useGenresContext();
    const { genreMovie, getMoviesGenre } = useMovieContext();
    const { getSeriesGenre } = useSeriesContext();
    const RenderItemGenresMovie: ListRenderItem<Genre> = ({ item: genre }) => {
        return <BoxContainer onPress={() => { 
            getMoviesGenre(genre.name);
            getSeriesGenre(genre.name);
            handleClose()
            }} selected={genre.name === genreMovie}>
            <TextBox>{genre.name}</TextBox>
        </BoxContainer>

    }

    const handleClose = () => {
        setClose(true);
        setTimeout(() => {
            openCloseDrawer();
        }, 503);

    }

    return <>
        <BackgroundOpacity useNativeDriver animation={close ? "fadeOut" : "fadeIn"} duration={500} activeOpacity={1} onPress={handleClose} />
        <ContainerAnimated useNativeDriver animation={close ? "fadeOutLeft" : "fadeInLeft"} duration={500}  >
            <TitleDrawer>Categorias</TitleDrawer>

            <List
                data={genresMovie}
                keyExtractor={(item, index) => String(index)}
                renderItem={(item: any) => RenderItemGenresMovie(item)}
                showsVerticalScrollIndicator={false}
            />

        </ContainerAnimated>
    </>;
}

export default Drawer;