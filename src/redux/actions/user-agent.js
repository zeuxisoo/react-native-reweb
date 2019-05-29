import * as types from '../types';

import { UserAgentModel } from '../../db/models';

//
function createdUserAgent(userAgent) {
    return {
        type     : types.ADD_USER_AGENT_SUCCESS,
        userAgent: userAgent,
    };
}

//
export function createUserAgent(userAgent) {
    return (dispatch, getState) => {
        dispatch({ type: types.ADD_USER_AGENT });

        UserAgentModel
            .create(userAgent)
            .then(userAgentObject => {
                dispatch(createdUserAgent(userAgentObject));
            });
    }
}
