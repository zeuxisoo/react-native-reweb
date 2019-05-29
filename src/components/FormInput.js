import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import { colors, vogues } from '../config';

const FormInput = props => (
    <Input
        containerStyle={vogues.inputContainerStyle}
        inputContainerStyle={styles.inputStyle}
        {...props} />
);

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.lightTertiary,
        borderRadius: 5,
    }
});

export {
    FormInput
};
