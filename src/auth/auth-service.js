const AuthService = {
    parseBasicToken(basicAuth) {
        return Buffer.from(basicAuth, "base64")
            .toString()
            .split(":");
    },
    getUserwithUserName(db, user_name) {
        return db("thingful_users")
            .where({ user_name })
            .first();
    }
};

module.exports = AuthService;