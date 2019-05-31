import Model from '../Model';
import _ from 'lodash';

import { SettingsSchema } from '../schemas';

class SettingsModel extends Model {

    static incrementing = false;

}

SettingsModel.schema = SettingsSchema;

export {
    SettingsModel
};
