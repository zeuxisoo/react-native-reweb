import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableButton } from './TouchableButton';

class WebsiteListItem extends React.PureComponent {

    render() {
        return (
            <TouchableButton onPress={() => this.props.onItemPress(this.props.website)}>
                <Card>
                    <Text>{this.props.website.name}</Text>
                    <Text>{this.props.website.url}</Text>
                </Card>
            </TouchableButton>
        )
    }

}

export {
    WebsiteListItem
};
