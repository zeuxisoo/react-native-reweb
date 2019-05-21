import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../config';

const BrowserBodySpinner = props => {
    if (props.isLoading === true) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={colors.primary} size="large" />
            </View>
        );
    }else{
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        position: 'absolute',
    },
});

export {
    BrowserBodySpinner
};
