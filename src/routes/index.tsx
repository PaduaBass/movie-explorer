import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import Home from '../pages/Home';

const Routes: React.FC = () => {
    enableScreens();
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerTitle: "Free Movie",
        headerStyle: { backgroundColor: "#DAA520" },
        headerTintColor: "#ddd",
        headerTitleStyle: { fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center', }


    }
    const routes = [
        { name: 'Home', component: Home },
    ];
    return <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen key={`Home`} name={`Home`} component={Home} />
    </Stack.Navigator>;

}

export default Routes;