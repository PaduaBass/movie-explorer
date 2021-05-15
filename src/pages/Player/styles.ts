import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import YoutubePlayer, { YoutubeIframeProps, YoutubeIframeRef } from "react-native-youtube-iframe";

const ShimmerCompoent = createShimmerPlaceholder(LinearGradient);

export const Container = styled.View`
    flex: 1;
    background: #323232;
    
`;

export const ContainerPlayer = styled.View`
    width: 100%;
    height: ${Platform.OS === "web" ? "604px" : "250px"};
    margin-bottom: ${Platform.OS === "web" ? "30px" : "0px"};

`;

export const ContainerShimmer = styled.View`
    width: 100%;
    height: ${Platform.OS === "web" ? "600px" : "200px"};
    position: absolute;
    border-radius: 4px;
    z-index: -1;

`;

export const ShimmerPlaceholder = styled(ShimmerCompoent)`
    height: ${Platform.OS === "web" ? "600px" : "231px"};
    width: 100%;
    border-radius: 4px;
    margin-top: ${Platform.OS === "web" ? "10px" : "0px"};

`;

export const YouTubeWebView = styled(YoutubePlayer)`
    border-radius: 4px
`;