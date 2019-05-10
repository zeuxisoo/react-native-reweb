import { ADD_WEBSITE, SET_WEBSITES } from '../types';

const initialState = {
    websites : [],
};

function create(state = initialState.websites, action) {
    switch(action.type) {
        case ADD_WEBSITE:
            return [ ...state, action.website ];
        default:
            return state;
    }
}

function all(state = initialState.websites, action) {
    switch(action.type) {
        case SET_WEBSITES:
            return action.websites;
        default:
            return state;
    }
}

export default function(state = initialState, action) {
    return {
        create: create(state.websites, action),
        all   : all(state.websites, action),
    }
};
