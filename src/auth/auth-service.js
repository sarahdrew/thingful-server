const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const AuthService = {
    getUserWithUserName(db, user_name) {
        return db('blogful_users')
            .where({ user_name })
            .first()
    },
    comparePasswords(password, hash) {
        return bcrypt.compare(password, hash)
    },
    createJwt(subject, payload) {
        return jwt.sign(payload, config.JWT_SECRET, {
            subject,
            algorithm: 'HS256',
        })
    },
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