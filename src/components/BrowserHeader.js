import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { BrowserSafeArea } from './BrowserSafeArea';
import { colors, vogues } from '../config';

class BrowserHeader extends React.PureComponent {

    static propTypes = {
        website: PropTypes.object.isRequired,

        onDonePress: PropTypes.func.isRequired,
    }

    render() {
        return (
            <BrowserSafeArea>
                <View style={styles.container}>
                    <View style={styles.doneButtonContainer}>
                        <Button
                            title="Done"
                            titleStyle={vogues.doneButtonTitleStyle}
                            buttonStyle={vogues.doneButtonStyle}
                            onPress={this.props.onDonePress} />
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
