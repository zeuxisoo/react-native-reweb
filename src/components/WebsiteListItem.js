import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableButton } from './TouchableButton';

class WebsiteListItem extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object,
        onPress: PropTypes.func,
    }

    static defaultProps = {
        website: {
            name: "",
            url : "",
        }
    }

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
