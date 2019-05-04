import React from 'react';
import { Button, View, Text } from 'react-native';
import colors from '../../config/colors';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <Button
                    title="Create"
                    color={ colors.tertiary }
                    onPress={ () => navigation.navigate('UrlCreateScreen') }
                />
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen
