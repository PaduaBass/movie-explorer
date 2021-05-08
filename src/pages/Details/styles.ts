import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
const window = Dimensions.get('window');

export const Container = styled.View`
  
`;


export const ImageMovie = styled.Image`
    width: ${window.width}px;
    height: ${window.height - 210}px;

`;

export const Overview = styled.Text`
    color: #fff;

`;

export const TitleButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
`;

export const Content = styled.View`


`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    height: 50px;
    background: red;
`;
