import * as types from '../types';

import { WebsiteModel } from '../../db/models';

function addedWebsite(website) {
    return {
        type   : types.ADD_WEBSITE,
        website: website,
    };
}

export function addWebsite(website) {
    return (dispatch, getState) => {
        WebsiteModel.create(website);

        dispatch(addedWebsite(website));
    }
}
