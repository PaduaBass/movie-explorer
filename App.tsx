import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GlobalContext from './src/contexts';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <NavigationContainer>
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.secondary} />
        <Routes />
      </ThemeProvider>
    </GlobalContext>
  </NavigationContainer>
}

