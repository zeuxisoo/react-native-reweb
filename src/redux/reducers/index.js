import { combineReducers } from 'redux';

import { default as website } from './website';
import { default as userAgent } from './user-agent';
import { default as settings } from './settings';

const reducers = combineReducers({
    website  : website,
    userAgent: userAgent,
    settings : settings,
});

export default reducers;
