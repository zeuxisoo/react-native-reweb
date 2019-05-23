import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors } from '../config';

class WebsiteListItemSeparator extends React.PureComponent {

    render() {
        return (
            <View style={styles.separator}/>
        );
    }

}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: colors.lightTertiary,
    }
})

export {
    WebsiteListItemSeparator
};
