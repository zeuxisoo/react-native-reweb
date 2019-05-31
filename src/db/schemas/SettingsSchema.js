export default SettingsSchema = {
    name: "settings",
    primaryKey: "name",
    properties: {
        name : { type: "string", indexed: true },
        value: { type: "string" },
    }
}
