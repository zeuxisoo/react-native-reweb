import React from 'react';
import { View, Text } from 'react-native';

import { HeaderMaterialButtons, HeaderMaterialItem } from '../../components';

class UserAgentIndexScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "User Agent",
            headerRight: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="add" iconName="add" onPress={() => navigation.navigate('UserAgentCreateScreen')} />
                </HeaderMaterialButtons>
            )
        }
    }

    render() {
        return (
            <View>
                <Text>TODO, Show user agent</Text>
            </View>
        );
    }

}

export {
    UserAgentIndexScreen
};
