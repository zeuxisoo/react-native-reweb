import WebsiteSchema from './WebsiteSchema';
import UserAgentSchema from './UserAgentSchema';
import SettingsSchema from './SettingsSchema';

export default schemas = [
    {
        schema       : [WebsiteSchema, UserAgentSchema],
        schemaVersion: 1,
        migration    : () => {},
        seeder       : () => {},
    },
    {
        schema       : [WebsiteSchema, UserAgentSchema, SettingsSchema],
        schemaVersion: 2,
        migration    : () => {},
        seeder       : (connection) => {
            connection.write(() => {
                connection.create('settings', {
                    'name' : 'user_agent',
                    'value': '0',
                });
            });
        },
    }
];

export {
    WebsiteSchema,
    UserAgentSchema,
    SettingsSchema,
};
