import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import { colors } from '../config';

class BrowserSafeArea extends React.PureComponent {

    static propTypes = {
        children: PropTypes.element,
    }

    render() {
        return (
            <SafeAreaView style={styles.safeContainer}>
                {this.props.children}
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: colors.primary,
    },
});

export {
    BrowserSafeArea
};
