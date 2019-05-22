import { createStackNavigator, createAppContainer } from 'react-navigation';

import { colors } from '../config';
import { WebsiteIndexScreen, WebsiteCreateScreen, WebsiteShowScreen } from '../screens';

//
const WebsiteStackNavigator = createStackNavigator({
    WebsiteIndexScreen : WebsiteIndexScreen,
    WebsiteCreateScreen: WebsiteCreateScreen,
    WebsiteShowScreen  : WebsiteShowScreen,
},{
    initialRouteName: "WebsiteIndexScreen",
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
const WebsiteStackContainer = createAppContainer(WebsiteStackNavigator);

//
export default WebsiteStackContainer;
