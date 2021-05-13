import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDraweContext } from '../../../contexts/components/DrawerContext';
import { Container } from './styles';

const Bars: React.FC = () => {
    const { openCloseDrawer } = useDraweContext();
    return <Container  style={{ marginLeft: 15 }} onPress={openCloseDrawer}>
        <Icon name="bars" size={20} color="#fff" />
    </Container>
}

export default Bars;