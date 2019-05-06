import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import configColors from '../../config/colors';
import configStyles from '../../config/styles';

const WebsiteInfoInput = props => (
    <Input
        containerStyle={configStyles.inputContainerStyle}
        inputContainerStyle={styles.inputStyle}
        {...props} />
);

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: configColors.lightTertiary,
        borderRadius: 5,
    }
});

export {
    WebsiteInfoInput
};
