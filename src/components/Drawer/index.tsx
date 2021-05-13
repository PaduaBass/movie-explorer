import React, { useState } from 'react';
import { View } from 'react-native';
import { useDraweContext } from '../../contexts/components/DrawerContext';
import * as Animatable from 'react-native-animatable';
import { Background, BoxContainer, Container, TextBox, TitleDrawer } from './styles';
const BackgroundOpacity = Animatable.createAnimatableComponent(Background);
const ContainerAnimated = Animatable.createAnimatableComponent(Container);

const Drawer: React.FC = () => {
    const { openCloseDrawer } = useDraweContext();
    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(true);
        setTimeout(() => {
            openCloseDrawer();
        },503);
   
    }
    return <>
        <BackgroundOpacity useNativeDriver animation={close ? "fadeOut" : "fadeIn"} duration={500} activeOpacity={1} onPress={handleClose}  />
        <ContainerAnimated useNativeDriver animation={close ? "fadeOutLeft" :"fadeInLeft"} duration={500}  >
            <TitleDrawer>Categorias</TitleDrawer>
            <BoxContainer>
                <TextBox>Ação</TextBox>
            </BoxContainer>

        </ContainerAnimated>
    </>;
}

export default React.memo(Drawer);