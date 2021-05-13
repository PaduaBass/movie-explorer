import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, HeaderTitle, CardStyleInterpolators, StackNavigationOptions, StackScreenProps, StackHeaderLeftButtonProps } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Player from '../pages/Player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoadingImage from '../components/LoadingImage';
import { RectButton } from 'react-native-gesture-handler';
import { useDraweContext } from '../contexts/components/DrawerContext';
import Bars from './components/Bars';
import Search from './components/Search';
import { theme } from '../styles/theme';

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
        },
        headerLeft: () => <Bars />,
        headerRight: () => <Search />

    }
    const routes = [
        { name: 'Home', component: Home },
    ];
    return <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen key={`Home`} name={`Home`} component={Home} />
        <Stack.Screen key={`Details`} name={`Details`} options={{ headerTitle: "Detalhes", headerLeft: undefined }} component={Details} />
        <Stack.Screen key={`Player`} name={`Player`} options={{ headerTitle: "Player", headerLeft: undefined }} component={Player} />


    </Stack.Navigator>;

}

export default Routes;