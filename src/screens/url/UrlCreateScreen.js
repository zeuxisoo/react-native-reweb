import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';


import { WebsiteInfoInput } from '../../components/input';
import { SecondaryButton } from '../../components/button';

class UrlCreateScreen extends React.Component {
    static navigationOptions = {
        title: "Create Url"
    }

    render() {
        return (
            <Card title="Website Info">
                <WebsiteInfoInput label="Name" placeholder="" />
                <WebsiteInfoInput label="Url" placeholder="" multiline={true} numberOfLines={5} />
                <SecondaryButton title="Create" />
            </Card>
        )
    }
}

export {
    UrlCreateScreen
};
