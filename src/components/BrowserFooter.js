import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button as ElementButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { BrowserSafeArea } from './BrowserSafeArea';
import { BrowserFooterButton } from './BrowserFooterButton';
import { colors } from '../config';

class BrowserFooter extends React.PureComponent {

    render() {
        return (
            <BrowserSafeArea>
                <View style={styles.container}>
                    <BrowserFooterButton
                        iconName="arrow-back"
                        onPress={this.props.onBackPress} />
                    <BrowserFooterButton
                        iconName="arrow-forward"
                        onPress={this.props.onForwardPress} />
                    {
                        this.props.isBrowserAutoRefreshEnabled === true
                        ?
                            <BrowserFooterButton
                                iconName="stop"
                                iconColor={colors.lightTertiary}
                                onPress={this.props.onRefreshStopPress} />
                        :
                            <BrowserFooterButton
                                iconName="refresh"
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
});

export {
    BrowserFooter
};
