import styled from 'styled-components/native';

export const Content = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
`;


export const ContainerList = styled.TouchableOpacity`
    width: 180px;
    height: 270px;
    background: #222;
    margin-right: 10px;
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
`;


export const SeachInput = styled.TextInput`
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    color: #fff;
`;

export const TitleCategory = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    font-family: Roboto;
`;