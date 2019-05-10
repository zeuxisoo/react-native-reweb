import _ from 'lodash';

import DBHelper from './DBHelper';

export default class Model {

    static schema = {};

    // Get the primary id
    static id() {
        const currentId = DBHelper.connection().objects(this.schema.name).max("id");

        return nextId = (_.isUndefined(currentId) || _.isNull(currentId)) ? 1 : currentId + 1;
    }

    // Create single item
    static create(item) {
        try {
            DBHelper.connection().write(() => {
                DBHelper.connection().create(this.schema.name, item);
            });
        }catch(e) {
            throw e;
        }
    }

    // Get all objects
    static objects() {
        try {
            return DBHelper.connection().objects(this.schema.name);
        }catch(e) {
            throw e;
        }
    }

    // Get all objects and convert to array
    static all() {
        try {
            return Array.from(this.objects());
        }catch(e) {
            throw e;
        }
    }

}
