import _ from 'lodash';

import DBHelper from './DBHelper';

export default class Model {

    static primaryKey = "id";

    static incrementing = true;

    static schema = {};

    // Get the primary id
    static id() {
        const currentId = DBHelper.connection().objects(this.schema.name).max("id");

        return nextId = (_.isUndefined(currentId) || _.isNull(currentId)) ? 1 : currentId + 1;
    }

    // Create single item
    static create(item) {
        return new Promise((resolve, reject) => {
            try {
                if (this.incrementing === true) {
                    item[this.primaryKey] = this.id();
                }

                DBHelper.connection().write(() => {
                    const obj = DBHelper.connection().create(this.schema.name, item);

                    resolve(obj);
                });
            }catch(e) {
                reject(e);
            }
        });
    }

    // Get all objects
    static objects() {
        try {
            return DBHelper.connection().objects(this.schema.name);
        }catch(e) {
            throw e;
        }
    }

    // Get all objects by desc order and convert to array
    static all() {
        return new Promise((resolve, reject) => {
            try {
                resolve(Array.from(this.objects().sorted("id", true)));
            }catch(e) {
                reject(e);
            }
        });
    }

}
