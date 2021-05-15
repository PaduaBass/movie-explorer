import { Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
    width: 100%;
    background: #222;
    height: 410px;
    margin-right: 10px;
    border-radius: 5px;
    margin-top: 10px;
    position: absolute;
`;

export const ImageBanner = styled.Image`
    width: ${Dimensions.get("window").width}px;
    height: 410px;
    border-radius: 5px;
`;

interface DotProps {
    selected?: boolean;
}
export const Dot = styled.View<DotProps>`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    color: ${props => props.selected ? '#e13e' : '#eee'};
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    background: #e3e3e3;
    position: absolute;
    z-index: 9999;

`;

export const TitleMovie = styled.Text`
    position: absolute;
    width: 100%;
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    background: #1119;
    text-align: center;
    bottom: 0;
    font-family: 'Roboto';
`;