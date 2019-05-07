import Realm from 'realm';
import _ from 'lodash';

import { UrlSchema } from './schemas';

export default class DBHelper {

    static instance = null;

    constructor(options = {}) {
        this.options = _.merge({
            schema       : [ UrlSchema ],
            schemaVersion: 1,
            path         : "reweb.realm",
        }, options);
    }

    open() {
        if (DBHelper.instance === null) {
            DBHelper.instance= Realm.open(this.options);
        }

        return DBHelper.instance;
    }

    instance() {
        return DBHelper.instance;
    }

}
