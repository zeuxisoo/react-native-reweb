import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { colors } from '../config';

const BrowserSafeArea = props => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            {props.children}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: colors.primary,
    },
});

export {
    BrowserSafeArea
};
