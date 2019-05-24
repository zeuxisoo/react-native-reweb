export default WebsiteSchema = {
    name: "websites",
    primaryKey: "id",
    properties: {
        id   : { type: "int", indexed: true },
        name : { type: "string" },
        url  : { type: "string" },
        trash: { type: "bool", default: false },
    }
}
