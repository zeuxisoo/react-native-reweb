import React from 'react';
import { View, Text } from 'react-native';

class CreateScreen extends React.Component {
    static navigationOptions = {
        title: "Create Url"
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Url Create Screen</Text>
            </View>
        )
    }
}

export default CreateScreen
