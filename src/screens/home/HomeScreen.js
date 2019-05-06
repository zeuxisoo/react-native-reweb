import React from 'react';
import { View, Text } from 'react-native';
import { MaterialHeaderButtons, Item } from '../../components/navbar/HeaderButton';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <MaterialHeaderButtons>
                    <Item
                        title="add"
                        iconName="add"
                        onPress={() => navigation.navigate('UrlCreateScreen')}
                    />
                </MaterialHeaderButtons>
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

export {
    HomeScreen
};
