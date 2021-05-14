import React, { useCallback, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import ItemList from '../../components/ItemList';
import LoadingImage from '../../components/LoadingImage';
import { useMovieContext } from '../../contexts/dataService/Movie';
import { useSearchContext } from '../../contexts/dataService/Search';
import { DiscoverMovie } from '../../contexts/interfaces';

import { Container, List, SeachInput } from './styles';

const Search: React.FC = () => {
    const { moviesTopRated, plusMovieTopRated } = useMovieContext();
    const { getSearch, search } = useSearchContext();
    const [searchIn, setSearctIn] = useState('');
    const handleSearch = async() => {
        await getSearch(searchIn)
        //await getSearch(query);
    };

    const RenderItem: ListRenderItem<DiscoverMovie> = ({ item: movie }) => {
        return <ItemList list='search' grid movie={movie} />
    }

    return <Container>
      <SeachInput
        placeholder="Pesquise aqui"
        onEndEditing={handleSearch}
        onSubmitEditing={handleSearch}
        onChangeText={(text) => setSearctIn(text)}
      />

      <List 
        data={search.results !== undefined ? search.results : moviesTopRated ? moviesTopRated.results : []}
        keyExtractor={(item, index) => String(index)}
        renderItem={(item: any) => RenderItem(item)}
        numColumns={6}
        onEndReached={plusMovieTopRated}
        onEndReachedThreshold={0.3}
        ListFooterComponent={ <LoadingImage /> }
      />
    </Container>;
}

export default React.memo(Search);