import styled from 'styled-components/native';
import { Animated } from 'react-native';
export const Container = styled(Animated.View)`
  
`;

interface ContainerListProps {
    grid?: boolean
}
export const ContainerList = styled.TouchableOpacity<ContainerListProps>`
    width: 180px;
    height: 270px;
    background: #222;
    margin-right: 10px;
    margin-top: ${props => props.grid ? "30px" : "0px"};
    border-radius: 5px;
    max-width: 250px;
    max-height: 250px;
`;

export const ImageMovie = styled.Image`
    width: 180px;
    height: 270px;
    border-radius: 5px;
`;


export const TitleMovie = styled.Text`
    position: absolute;
    width: 100%;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    background: #1119;
    text-align: center;
    bottom: 0;
    font-family: 'Roboto';
`;

export const BackgroundImage = styled.ImageBackground`
    width: 180px;
    height: 270px;
    border-radius: 5px;
`;