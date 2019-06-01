import * as types from '../types';
import _ from 'lodash';

import { SettingsModel } from '../../db/models';

// Conversion between value column <=> settings reducer state
// 1. this column is type of string in realm db
// 2. the settings reducer state is boolean
const nativeBooleanToIntegerString = boolValue => `${+boolValue}`;  // true => "1", false => "0"
const integerStringToNativeBoolean = intValue => !!+intValue;       // "1" => true, "0" => false

//
function fetchedSettings(settings) {
    return {
        type    : types.SET_SETTINGS_SUCCESS,
        settings: settings,
    }
}

function switchedUserAgent(userAgent) {
    return {
        type     : types.SWITCH_USER_AGENT_SUCCESS,
        userAgent: userAgent,
    };
}

//
export function fetchSettings() {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_SETTINGS });

        SettingsModel
            .all()
            .then(settings => {
                // From: [realmObject{name, value}, realmObject{name, value}]
                // To  : { name: value, name: value }
                //
                // Old style:
                // return _.extend(
                //     {},
                //     ..._.map(settings, setting => {
                //         const name  = _.camelCase(setting.name);
                //         const value = integerStringToNativeBoolean(setting.value);

                //         return { [name]: value };
                //     })
                // );

                let settingsObject = {};

                settings.forEach((setting, index) => {
                    const name  = _.camelCase(setting.name);
                    const value = integerStringToNativeBoolean(setting.value);

                    settingsObject[name] = value;
                });

                return settingsObject;
            })
            .then(settings => {
                console.log(settings);
                dispatch(fetchedSettings(settings));
            });
    }
}

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
