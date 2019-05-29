import Model from '../Model';
import _ from 'lodash';

import { UserAgentSchema } from '../schemas';

class UserAgentModel extends Model {

    static sortBy = {
        name: "id",
        desc: true,
    }

}

UserAgentModel.schema = UserAgentSchema;

export {
    UserAgentModel
};
