import WebsiteSchema from './WebsiteSchema';

export default schemas = [
    {
        schema       : [WebsiteSchema],
        schemaVersion: 1,
        migration    : () => {}
    },
];

export {
    WebsiteSchema
};
