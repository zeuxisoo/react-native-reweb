import * as types from '../types';

import { WebsiteModel } from '../../db/models';

function createdWebsite(website) {
    return {
        type   : types.ADD_WEBSITE_SUCCESS,
        website: website,
    };
}

function fetchedWebsites(websites) {
    return {
        type    : types.SET_WEBSITES_SUCCESS,
        websites: websites,
    }
}

export function createWebsite(website) {
    return (dispatch, getState) => {
        dispatch({ type: types.ADD_WEBSITE });

        WebsiteModel
            .create(website)
            .then(websiteObject => {
                dispatch(createdWebsite(websiteObject));
            });
    }
}

export function fetchWebsites() {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_WEBSITES });

        WebsiteModel
            .all()
            .then(websites => {
                dispatch(fetchedWebsites(websites));
            });
    }
}
