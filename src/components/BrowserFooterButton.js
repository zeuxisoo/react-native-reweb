import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../config';

const BrowserFooterButton = props => {
    return (
        <Button
            icon={
                <Icon
                    name={props.iconName}
                    size={15}
                    color={props.iconColor ? props.iconColor : colors.secondary} />
            }
            containerStyle={styles.container}
            buttonStyle={styles.button}
            onPress={props.onPress} />
    )
};

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
