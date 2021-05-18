import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, CardStyleInterpolators, StackNavigationOptions } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Player from '../pages/Player';
import Bars from './components/Bars';
import SearchPage from '../pages/SearchPage';
import { theme } from '../styles/theme';
import Search from './components/Search';

const Routes: React.FC = () => {
    enableScreens();
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerTitleAlign: "center",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitle: "Movie Explorer",
        headerStyle: { backgroundColor: theme.colors.secondary },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1,
            fontFamily: theme.font,
        },
        headerLeft: () => <Bars />,
        headerRight: () => <Search />

    }
    const routes = [
        { name: 'Home', component: Home },
    ];
    return <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen key={`Home`} name={`Home`} component={Home} />
        <Stack.Screen key={`Details`} name={`Details`} options={{ headerTitle: "Detalhes", headerLeft: undefined, headerRight: undefined  }} component={Details} />
        <Stack.Screen key={`Player`} name={`Player`} options={{ headerTitle: "Player", headerLeft: undefined, headerRight: undefined }} component={Player} />
        <Stack.Screen key={`Search`} name={`Search`} options={{ headerTitle: "Pesquisa", headerLeft: undefined, headerRight: undefined }} component={SearchPage} />
    </Stack.Navigator>;

}

export default Routes;