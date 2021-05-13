import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';

const Search: React.FC = () => {
    return <Container style={{ marginRight: 15 }} onPress={() => {}}>
        <Icon name="search" size={20} color="#fff" />
    </Container>
}


export default Search;