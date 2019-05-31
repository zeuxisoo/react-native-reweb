import * as types from '../types';

import { SettingsModel } from '../../db/models';

// Conversion between value column <=> settings reducer state
// 1. this column is type of string in realm db
// 2. the settings reducer state is boolean
const nativeBooleanToIntegerString = boolValue => `${+boolValue}`;  // true => "1", false => "0"
const integerStringToNativeBoolean = intValue => !!+intValue;       // "1" => true, "0" => false

//
function switchedUserAgent(userAgent) {
    return {
        type     : types.SWITCH_USER_AGENT_SUCCESS,
        userAgent: userAgent,
    };
}

//
export function switchUserAgent(isOn) {
    return (dispatch, getState) => {
        dispatch({ type: types.SWITCH_USER_AGENT });

        SettingsModel
            .where(`name = $0`, "user_agent")
            .update({
                value: nativeBooleanToIntegerString(isOn),
            })
            .then(settings => {
                const userAgentValue = integerStringToNativeBoolean(settings[0].value)

                dispatch(switchedUserAgent(userAgentValue));
            });
    }
}
