import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../config';

class HeaderTitle extends React.PureComponent {

    render() {
        const website = this.props.website;

        return (
            <View style={styles.container}>
                <Text>{website.name}</Text>
                <Text style={styles.url}>{website.url}</Text>
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
