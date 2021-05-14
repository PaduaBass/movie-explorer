import styled from 'styled-components/native';
import { Platform } from 'react-native';
export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background: #323232;
    align-items: center;
`;

export const List = styled.FlatList`
    width: ${Platform.OS === "web" ? "80%" : "90%"};
`;

export const SeachInput = styled.TextInput`
    width: ${Platform.OS === "web" ? "80%" : "90%"};
    height: 50px;
    border-radius: 4px;
    border: 0;
    background: #ddd;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    color: #333;
`;