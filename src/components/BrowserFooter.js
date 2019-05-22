import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { BrowserSafeArea } from './BrowserSafeArea';
import { BrowserFooterButton } from './BrowserFooterButton';
import { colors } from '../config';

class BrowserFooter extends React.PureComponent {

    static propTypes = {
        isBrowserAutoRefreshEnabled: PropTypes.bool,

        onBackPress: PropTypes.func,
        onForwardPress: PropTypes.func,
        onRefreshStopPress: PropTypes.func,
        onRefreshStartPress: PropTypes.func,
    }

    static defaultProps = {
        isBrowserAutoRefreshEnabled: false,
    }

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
