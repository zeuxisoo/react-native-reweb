import { createStackNavigator, createAppContainer } from 'react-navigation';

import { colors } from '../config';
import { UserAgentIndexScreen, UserAgentCreateScreen } from '../screens';

//
const UserAgentStackNavigator = createStackNavigator({
    UserAgentIndexScreen: UserAgentIndexScreen,
    UserAgentCreateScreen: UserAgentCreateScreen,
},{
    initialRouteName: "UserAgentIndexScreen",
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
const UserAgentStackContainer = createAppContainer(UserAgentStackNavigator);

//
export default UserAgentStackContainer;
