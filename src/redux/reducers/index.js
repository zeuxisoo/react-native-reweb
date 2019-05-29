import { combineReducers } from 'redux';

import { default as website } from './website';
import { default as userAgent } from './user-agent';

const reducers = combineReducers({
    website  : website,
    userAgent: userAgent,
});

export default reducers;
