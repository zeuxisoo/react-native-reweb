import React from 'react';

import {
    HeaderMaterialButtons,
    HeaderMaterialItem,
} from '../../components';

import { WebsiteList } from '../../containers';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home",
            headerRight: (
                <HeaderMaterialButtons>
                    <HeaderMaterialItem title="add" iconName="add" onPress={() => navigation.navigate('WebsiteCreateScreen')} />
                </HeaderMaterialButtons>
            )
        }
    }

    handleItemPress(website) {
        this.props.navigation.navigate('WebsiteIndexScreen', {
            website: website,
        });
    }

    render() {
        return (
            <WebsiteList navigation={this.props.navigation} onItemPress={(website) => this.handleItemPress(website)} />
        );
    }
}

export {
    HomeScreen
};
