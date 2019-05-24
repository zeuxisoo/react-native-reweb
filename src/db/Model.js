import _ from 'lodash';

import DBHelper from './DBHelper';

class Model {

    static primaryKey   = "id";
    static incrementing = true;
    static schema       = {};
    static sortBy       = {};
    static whereBy      = "";

    id() {
        const currentId = DBHelper.connection().objects(this.schema.name).max("id");

        return nextId = (_.isUndefined(currentId) || _.isNull(currentId)) ? 1 : currentId + 1;
    }

    table(name) {
        try {
            return DBHelper.connection().objects(name);
        }catch(e) {
            throw e;
        }
    }

    create(item) {
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

    orderBy(name, desc) {
        this.sortBy = {
            name: name,
            desc: desc,
        }

        return this;
    }

    where(condition) {
        this.whereBy = condition;

        return this;
    }

    all() {
        return new Promise((resolve, reject) => {
            try {
                let data  = [];
                let model = this.table(this.schema.name);

                if (_.isEmpty(this.whereBy) === false) {
                    model = model.filtered(this.whereBy);
                }

                if (_.isEmpty(this.sortBy) === false) {
                    model = model.sorted(this.sortBy.name, this.sortBy.desc);
                }

                data = model;

                resolve(Array.from(data));
            }catch(e) {
                reject(e);
            }
        });
    }

    update(obj, data) {
        return new Promise((resolve, reject) => {
            try {
                DBHelper.connection().write(() => {
                    const updatedObject = _.merge(obj, data);
                    const newObject     = DBHelper.connection().create(this.schema.name, updatedObject, true);

                    resolve(newObject);
                });
            }catch(e) {
                reject(e);
            }
        });
    }

}

// Using proxy to build up missing method for Model
// like __call in php, method_missing in ruby
export default new Proxy(Model, {
    get(object, property) {
        if (Reflect.has(object, property) === true) {
            return object[property];
        }

        let model = new Model();

        return model[property];
    }
});
