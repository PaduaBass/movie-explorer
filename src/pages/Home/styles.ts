import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

export const ContainerAnimated = styled(Animated.View)`
    height: 100%;
    background: #323232;
`;

export const Scroll = styled.ScrollView`
    position: absolute;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #323232;
`;

export const TitleCategory = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Roboto';
    margin: 10px 0px;
`;

export const ViewBackground = styled.View`
    position: absolute;
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height - 210}px;

`;

export const BannerImage = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height - 210}px;
    border-radius: 5px;
`;

export const ContainerList = styled.View`
    height: 100%;

`;