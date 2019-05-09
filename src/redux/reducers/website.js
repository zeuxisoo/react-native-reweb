import { ADD_WEBSITE } from '../types';

const initialState = {
    websites: []
};

function create(state = initialState.websites, action) {
    switch(action.type) {
        case ADD_WEBSITE:
            return [ ...state, action.website ];
        default:
            return state;
    }
}

export default function website(state = initialState, action) {
    return {
        create: create(state.websites, action),
    }
};
