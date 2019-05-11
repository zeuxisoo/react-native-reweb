import * as types from '../types';

const createState = {
    isLoading: false,
    websites : {},
};

const allState = {
    isLoading: false,
    websites : [],
}

function create(state = createState, action) {
    switch(action.type) {
        case types.ADD_WEBSITE:
            return {
                ...state,
                isLoading: true,
            }
        case types.ADD_WEBSITE_SUCCESS:
            return {
                isLoading: false,
                websites : action.website,
            }
        default:
            return state;
    }
}

function all(state = allState, action) {
    switch(action.type) {
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
        default:
            return state;
    }
}

export {
    create,
    all,
};
