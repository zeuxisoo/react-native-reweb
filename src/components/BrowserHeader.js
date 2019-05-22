import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, StyleSheet } from 'react-native';

import { BrowserSafeArea } from './BrowserSafeArea';
import { colors } from '../config';

class BrowserHeader extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object,

        onDonePress: PropTypes.func,
    }

    static defaultProps = {
        website: {
            name: "",
            url : "",
        }
    }

    render() {
        return (
            <BrowserSafeArea>
                <View style={styles.container}>
                    <View style={styles.doneButtonContainer}>
                        <Button title="Done" color={colors.darkPrimary} onPress={this.props.onDonePress} />
                    </View>
                    <View style={styles.addressBarContainer}>
                        <Text style={styles.websiteName}>{this.props.website.name}</Text>
                        <Text style={styles.websiteUrl}>{this.props.website.url}</Text>
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
