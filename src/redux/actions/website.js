import * as types from '../types';

import { WebsiteModel } from '../../db/models';

function addedWebsite(website) {
    return {
        type   : types.ADD_WEBSITE,
        website: website,
    };
}

function fetchedWebsites(websites) {
    return {
        type    : types.SET_WEBSITES,
        websites: websites,
    }
}

export function addWebsite(website) {
    return (dispatch, getState) => {
        WebsiteModel.create(website);

        dispatch(addedWebsite(website));
    }
}

export function fetchWebsites() {
    return (dispatch, getState) => {
        const websites = WebsiteModel.all();

        dispatch(fetchedWebsites(websites));
    }
}
