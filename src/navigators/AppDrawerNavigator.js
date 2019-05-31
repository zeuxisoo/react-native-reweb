import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WebsiteStackNavigator from './WebsiteStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import AppDrawerMenu from './AppDrawerMenu';

//
const AppDrawerNavigator = createDrawerNavigator({
    Settings: {
        screen: SettingsStackNavigator,
        navigationOptions: {
            drawerLabel: "Settings",
            drawerIcon : () => (
                <Icon name="settings" size={24} />
            )
        }
    },
    Home: {
        screen: WebsiteStackNavigator,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon : () => (
                <Icon name="home" size={24} />
            )
        }
    },
}, {
    contentComponent: AppDrawerMenu
});

//
const AppDrawerContainer = createAppContainer(AppDrawerNavigator);

//
export default AppDrawerContainer;
