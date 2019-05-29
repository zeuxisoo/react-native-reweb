import * as types from '../types';

const initialState = {
    isLoading : true,
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
        case types.SET_USER_AGENTS:
            return {
                ...state,
                isLoading: true,
            }
        case types.SET_USER_AGENTS_SUCCESS:
            return {
                isLoading : false,
                userAgents: action.userAgents,
            }
        case types.DELETE_USER_AGENT:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_USER_AGENT_SUCCESS:
            return {
                isLoading: false,
                userAgents: state.userAgents.filter(userAgent => {
                    return userAgent.trash !== true;
                })
            }
        default:
            return state;
    }
}
