export default UserAgentSchema = {
    name: "user_agents",
    primaryKey: "id",
    properties: {
        id     : { type: "int", indexed: true },
        content: { type: "string" },
        trash  : { type: "bool", default: false },
    }
}
