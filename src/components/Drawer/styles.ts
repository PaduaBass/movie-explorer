import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    position: absolute;
    width: ${Platform.OS === "web" ? "20%" : "50%"};
    height: 100%;
    background: #4169E1;
    z-index: 9999;
    align-items: center;
`;


export const Background = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #4169E1;
    z-index: 9998;
    background: #3339;
`;

export const BoxContainer = styled.TouchableOpacity`
    width: 90%;
    background: #2323;
    height: 45px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const TitleDrawer = styled.Text`
    color: #fff;
    font-size: 22px;
    font-family: 'Roboto';
    font-weight: bold;
    margin: 10px 0;
`;

export const TextBox = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: bold;
`;

