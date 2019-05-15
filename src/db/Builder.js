import _ from 'lodash';
import DBHelper from './DBHelper';

export default class Builder {

    primaryKey   = "id";
    incrementing = true;
    schema       = {};
    sortBy       = {};

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

    all() {
        return new Promise((resolve, reject) => {
            try {
                let data  = [];

                if (_.isEmpty(this.sortBy) === false) {
                    data = this.table(this.schema.name).sorted(this.sortBy.name, this.sortBy.desc);
                }else{
                    data = this.table(this.schema.name);
                }

                resolve(Array.from(data));
            }catch(e) {
                reject(e);
            }
        });
    }

}
