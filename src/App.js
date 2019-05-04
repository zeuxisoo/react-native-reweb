/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import colors from './config/colors';

import HomeScreen from './screens/home/HomeScreen';
import UrlCreateScreen from './screens/url/CreateScreen';

//
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    UrlCreateScreen: UrlCreateScreen,
},{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleStyle: {
            color: colors.secondary,
        },
    },
});

//
const AppContainer = createAppContainer(AppNavigator);

//
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
