import Realm from 'realm';
import _ from 'lodash';

import schemas from './schemas';

export default class DBHelper {

    static realm = null;

    constructor(options = {}) {
        this.options = _.merge({
            path: "reweb.realm",
        }, options);

        this.migrate();
    }

    migrate() {
        // Get current realm database schema version
        let nextSchemaIndex = Realm.schemaVersion(this.options.path);

        // If current realm database schema version is smaller than schema list size, do migration
        while (nextSchemaIndex < schemas.length) {
            const nextSchemaIndexMarker = nextSchemaIndex++;

            // Find schema and seeder
            const currentSchema = schemas[nextSchemaIndexMarker];

            // Open connection, do migration and close it
            const migratedRealm = new Realm(_.merge(currentSchema, this.options))

            // Seed data to migrated db
            if (_.isUndefined(currentSchema) === false) {
                currentSchema.seeder(migratedRealm);
            }

            migratedRealm.close();
        }
    }

    open() {
        if (_.isNull(DBHelper.realm)) {
            DBHelper.realm = new Realm(_.merge(schemas[schemas.length - 1], this.options));
        }

        return DBHelper.realm;
    }

    static connection() {
        return DBHelper.realm;
    }

}
