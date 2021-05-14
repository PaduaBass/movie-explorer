import React from 'react';
import { View } from 'react-native';

import { ContainerView } from './styles';

const Container: React.FC = ({ children }) => {
  
  return <ContainerView>
      { children }
  </ContainerView>;
}

export default Container;