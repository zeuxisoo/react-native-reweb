export default UrlSchema = {
    name: "urls",
    primaryKey: "id",
    properties: {
        id  : { type: "int", indexed: true },
        name: { type: "string" },
        url : { type: "string" },
    }
}
