import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GlobalContext from './src/contexts';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return <NavigationContainer>
    <GlobalContext>
      <Routes />
    </GlobalContext>
  </NavigationContainer>
}

