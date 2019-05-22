import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../config';

class BrowserFooterButton extends React.PureComponent {

    static propTypes = {
        iconName: PropTypes.string,
        iconColor: PropTypes.string,

        onPress: PropTypes.func,
    }

    static defaultProps = {
        iconName : "",
        iconColor: null,
    }

    render() {
        return (
            <Button
                icon={
                    <Icon
                        name={this.props.iconName}
                        size={15}
                        color={this.props.iconColor ? this.props.iconColor : colors.secondary} />
                }
                containerStyle={styles.container}
                buttonStyle={styles.button}
                onPress={this.props.onPress} />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        backgroundColor:colors.primary
    },
});

export {
    BrowserFooterButton
};
