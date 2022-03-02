module.exports = {
    db: {
        database: "ntask",
        username: "",
        password: "",
        params: {
            dialect: "sqlite",
            storage: "ntask.sqlite",
            define: {
                underscored: true
            }
        }
    },
    jwt: {
        secret: 'Nta$k-AP1',
        options: { session: false }
    }
}