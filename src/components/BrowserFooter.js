import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button as ElementButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BrowserSafeArea } from './BrowserSafeArea';
import { colors } from '../config';

class BrowserFooter extends React.PureComponent {

    render() {
        return (
            <BrowserSafeArea>
                <View style={styles.container}>
                    <ElementButton
                        icon={
                            <Icon
                                name="arrow-back"
                                size={15}
                                color={colors.secondary} />
                        }
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.onBackPress} />
                    <ElementButton
                        icon={
                            <Icon
                                name="arrow-forward"
                                size={15}
                                color={colors.secondary} />
                        }
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.onForwardPress} />
                    {
                        this.props.isBrowserAutoRefreshEnabled === true
                        ?
                            <ElementButton
                                icon={
                                    <Icon
                                        name="stop"
                                        size={15}
                                        color={colors.lightTertiary} />
                                }
                                containerStyle={styles.buttonContainer}
                                buttonStyle={styles.buttonStyle}
                                onPress={this.props.onRefreshStopPress} />
                        :
                            <ElementButton
                                icon={
                                    <Icon
                                        name="refresh"
                                        size={15}
                                        color={colors.secondary} />
                                }
                                containerStyle={styles.buttonContainer}
                                buttonStyle={styles.buttonStyle}
                                onPress={this.props.onRefreshStartPress} />
                    }
                </View>
            </BrowserSafeArea>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },

    buttonStyle: {
        backgroundColor:colors.primary
    },
});

export {
    BrowserFooter
};
