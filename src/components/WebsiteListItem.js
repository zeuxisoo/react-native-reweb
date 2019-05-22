import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text, } from 'react-native-elements';
import { TouchableButton } from './TouchableButton';

class WebsiteListItem extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object,
        onItemPress: PropTypes.func,
    }

    static defaultProps = {
        website: {
            name: "",
            url : "",
        },

        onItemPress: () => console.log('Please attach onItemPress method'),
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
