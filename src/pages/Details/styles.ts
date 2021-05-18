import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
const ShimmerCompoent = createShimmerPlaceholder(LinearGradient);
const window = Dimensions.get('window');

export const Container = styled.ScrollView`
    background: #323232;

`;


export const ImageMovie = styled.Image`
    width: ${window.width}px;
    height: ${window.height - 210}px;

`;

export const Text = styled.Text`
    color: #fff;

`;

export const TextTitle = styled.Text`
    color: #9998;
    font-weight: bold;

`;

export const Row = styled.View`
    flex-direction: row;
`;


export const TitleButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    font-family: 'Roboto';
`;

export const Content = styled.View`
    background: #323232;

`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    height: 50px;
    background: red;
`;

export const Main = styled.View`
    width: 100%;
    bottom: 0px;
    background: #323232;

`;

export const BackgroundShimmer = styled(ShimmerCompoent)`
    width: ${window.width}px;
    height: ${window.height - 210}px;
    position: absolute;
`;