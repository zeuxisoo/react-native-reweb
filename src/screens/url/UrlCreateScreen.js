import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { vogues } from '../../config';
import { WebsiteInfoInput } from '../../components/input/WebsiteInfoInput';

class UrlCreateScreen extends React.Component {
    static navigationOptions = {
        title: "Create Url"
    }

    render() {
        return (
            <Card title="Website Info">
                <WebsiteInfoInput label="Name" placeholder="" />
                <WebsiteInfoInput label="Url" placeholder=""
                    multiline={true}
                    numberOfLines={5} />
                <Button
                    buttonStyle={vogues.createSecondaryButton}
                    title='Create' />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    textarea: {
        minHeight: 200,
    },
})

export {
    UrlCreateScreen
};
