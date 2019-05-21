import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import { BrowserSafeArea } from './BrowserSafeArea';
import { colors } from '../config';

class BrowserHeader extends React.PureComponent {

    render() {
        const { website } = this.props;

        return (
            <BrowserSafeArea>
                <View style={styles.container}>
                    <View style={styles.doneButtonContainer}>
                        <Button title="Done" color={colors.darkPrimary} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.addressBarContainer}>
                        <Text style={styles.websiteName}>{website.name}</Text>
                        <Text style={styles.websiteUrl}>{website.url}</Text>
                    </View>
                </View>
            </BrowserSafeArea>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
    },
    doneButtonContainer: {
        alignItems: 'center',
    },
    addressBarContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
    },

    websiteName: {
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    websiteUrl: {
        color: colors.tertiary,
        fontSize: 13,
    },
});

export {
    BrowserHeader
};
