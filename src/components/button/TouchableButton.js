import React from 'react';
import { TouchableNativeFeedback,  TouchableOpacity, Platform } from 'react-native';

const TouchableButton = props => {
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback delayPressIn={0} {...props}>
                {props.children}
            </TouchableNativeFeedback>
        );
    }else{
        return (
            <TouchableOpacity {...props}>
                {props.children}
            </TouchableOpacity>
        );
    }
}

export {
    TouchableButton
};
