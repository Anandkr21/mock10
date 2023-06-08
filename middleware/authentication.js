const jwt = require("jsonwebtoken")
const { userModel } = require('../model/userModel')

require("dotenv").config()

const authenticate = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).send("Please login first")
    }
    jwt.verify(token, process.env.secret_key, (err, user) => {
        if (err) {
            return res.status(403).send("plz login")
        }
        else {
            req.user = user
            next()
        }
    })
}

module.exports = { authenticate }