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

        WebsiteModel.create(website);

        dispatch(createdWebsite(website));
    }
}

export function fetchWebsites() {
    return (dispatch, getState) => {
        dispatch({ type: types.SET_WEBSITES });

        const websites = WebsiteModel.all();

        dispatch(fetchedWebsites(websites));
    }
}
