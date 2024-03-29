import * as types from '../types';

const initialState = {
    isLoading: true,
    websites : [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.ADD_WEBSITE:
            return {
                ...state,
                isLoading: true,
            }
        case types.ADD_WEBSITE_SUCCESS:
            return {
                isLoading: false,
                websites : [action.website, ...state.websites],
            }
        case types.SET_WEBSITES:
            return {
                ...state,
                isLoading: true,
            }
        case types.SET_WEBSITES_SUCCESS:
            return {
                isLoading: false,
                websites : action.websites,
            }
        case types.DELETE_WEBSITE:
            return {
                ...state,
                isLoading: true,
            }
        case types.DELETE_WEBSITE_SUCCESS:
            return {
                isLoading: false,
                websites : state.websites.filter(website => {
                    return website.trash !== true;
                })
            }
        default:
            return state;
    }
}
