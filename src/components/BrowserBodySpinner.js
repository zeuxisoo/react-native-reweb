import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../config';

class BrowserBodySpinner extends React.PureComponent {

    static propTypes = {
        isLoading: PropTypes.bool,
    }

    static defaultProps = {
        isLoading: true,
    }

    render() {
        if (this.props.isLoading === true) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>
            );
        }else{
            return null;
        }
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
