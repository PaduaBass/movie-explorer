import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const LoadingImage: React.FC = () => {
  return <Container>
      <ActivityIndicator size="small" color="#fff" />
    </Container>
}

export default LoadingImage;