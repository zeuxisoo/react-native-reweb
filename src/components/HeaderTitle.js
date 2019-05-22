import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { colors } from '../config';

class HeaderTitle extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object,
    }

    static defaultProps = {
        website: {
            name: "",
            url : "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.website.name}</Text>
                <Text style={styles.url}>{this.props.website.url}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    url: {
        color: colors.tertiary
    }
})

export {
    HeaderTitle
};
