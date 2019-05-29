import * as types from '../types';

const initialState = {
    isLoading : false,
    userAgents: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_USER_AGENT:
            return {
                ...state,
                isLoading: true,
            }
        case types.ADD_USER_AGENT_SUCCESS:
            return {
                isLoading : false,
                userAgents: [action.userAgent, ...state.userAgents],
            }
        default:
            return state;
    }
}
