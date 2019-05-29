import * as types from '../types';

import { UserAgentModel } from '../../db/models';

//
function createdUserAgent(userAgent) {
    return {
        type     : types.ADD_USER_AGENT_SUCCESS,
        userAgent: userAgent,
    };
}

function fetchedUserAgents(userAgents) {
    return {
        type      : types.SET_USER_AGENTS_SUCCESS,
        userAgents: userAgents,
    }
}

function deletedUserAgent(userAgent) {
    return {
        type     : types.DELETE_USER_AGENT_SUCCESS,
        userAgent: userAgent,
    }
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

export function fetchUserAgents() {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_USER_AGENTS });

        UserAgentModel
            .where("trash == false")
            .all()
            .then(userAgents => {
                dispatch(fetchedUserAgents(userAgents));
            });
    }
}

export function deleteUserAgent(userAgent) {
    return (dispatch, getState) => {
        dispatch({ type: types.DELETE_USER_AGENT });

        UserAgentModel
            .where("id = $0", userAgent.id)
            .update({
                trash: true
            })
            .then(updatedUserAgents => {
                dispatch(deletedUserAgent(updatedUserAgents[0]));
            });
    }
}
