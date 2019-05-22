import { combineReducers } from 'redux';
import { default as website } from './website';

const reducers = combineReducers({
    website: website,
});

export default reducers;
