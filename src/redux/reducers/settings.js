import * as types from '../types';

const initialState = {
    userAgent: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.SET_SETTINGS:
            return { ...state }
        case types.SET_SETTINGS_SUCCESS:
            return { ...action.settings }
        case types.SWITCH_USER_AGENT:
            return { ...state }
        case types.SWITCH_USER_AGENT_SUCCESS:
            return {
                ...state,
                userAgent: action.userAgent,
            }
        default:
            return state;
    }
}
