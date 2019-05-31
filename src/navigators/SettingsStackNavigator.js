import { createStackNavigator, createAppContainer } from 'react-navigation';

import { colors } from '../config';
import { SettingsIndexScreen, UserAgentIndexScreen, UserAgentCreateScreen } from '../screens';

//
const SettingsStackNavigator = createStackNavigator({
    SettingsIndexScreen: SettingsIndexScreen,
    UserAgentIndexScreen: UserAgentIndexScreen,
    UserAgentCreateScreen: UserAgentCreateScreen,
},{
    initialRouteName: "SettingsIndexScreen",
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
const SettingsStackContainer = createAppContainer(SettingsStackNavigator);

//
export default SettingsStackContainer;
