import WebsiteSchema from './WebsiteSchema';
import UserAgentSchema from './UserAgentSchema';

export default schemas = [
    {
        schema       : [WebsiteSchema, UserAgentSchema],
        schemaVersion: 1,
        migration    : () => {}
    }
];

export {
    WebsiteSchema,
    UserAgentSchema,
};
