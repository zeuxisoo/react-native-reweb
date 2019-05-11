import { combineReducers } from 'redux';
import * as website from './website';

const reducers = combineReducers({
    createWebsite: website.create,
    allWebsite   : website.all,
});

export default reducers;
