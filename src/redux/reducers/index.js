import { combineReducers } from 'redux';
import website from './website';

const reducers = combineReducers({
    website: website,
});

export default reducers;
