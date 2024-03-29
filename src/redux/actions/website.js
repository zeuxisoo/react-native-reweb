import * as types from '../types';

import { WebsiteModel } from '../../db/models';

//
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

function deletedWebsite(website) {
    return {
        type   : types.DELETE_WEBSITE_SUCCESS,
        website: website,
    }
}

//
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
            .where("trash == false")
            .all()
            .then(websites => {
                dispatch(fetchedWebsites(websites));
            });
    }
}

export function deleteWebsite(website) {
    return (dispatch, getState) => {
        dispatch({ type: types.DELETE_WEBSITE });

        WebsiteModel
            .where("id = $0", website.id)
            .update({
                trash: true
            })
            .then(updatedWebsites => {
                dispatch(deletedWebsite(updatedWebsites[0]));
            });
    }
}
