import * as types from '../types';

const initialState = {
    userAgent: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
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
