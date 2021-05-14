import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';

const Search: React.FC = () => {
    const { navigate } = useNavigation();
    return <Container style={{ marginRight: 15 }} onPress={() => navigate('Search')}>
        <Icon name="search" size={20} color="#fff" />
    </Container>
}


export default Search;