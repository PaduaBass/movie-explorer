import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background: #323232;
    align-items: center;
`;

export const List = styled.FlatList`
    width: 80%;
`;

export const SeachInput = styled.TextInput`
    width: 80%;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    color: #fff;
`;