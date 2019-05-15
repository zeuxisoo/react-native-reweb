import Model from '../Model';
import _ from 'lodash';

import { WebsiteSchema } from '../schemas';

class WebsiteModel extends Model {

    static sortBy = {
        name: "id",
        desc: true,
    }

}

WebsiteModel.schema = WebsiteSchema;

export {
    WebsiteModel
};
