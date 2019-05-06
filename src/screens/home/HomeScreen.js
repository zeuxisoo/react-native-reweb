import React from 'react';
import { View, Text } from 'react-native';
import { HeaderMaterialButtons, HeaderMaterialItem } from '../../components/navbar';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="add" iconName="add"
                        onPress={() => navigation.navigate('UrlCreateScreen')}
                    />
                </HeaderMaterialButtons>
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
