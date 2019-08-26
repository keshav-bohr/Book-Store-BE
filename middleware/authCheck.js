const jwt = require('jsonwebtoken')
const User = require('../models/user')
const error = require('../utils/error')

async function authTokenCheck(req, res, next) {
    try {
        const receivedToken = req.headers.token
        if (receivedToken) {
            const decodedToken = jwt.verify(receivedToken, process.env.JWT_SECRET_KEY)
            const id = decodedToken.id
            const user = await User.findById(id)
            if (user) {
                req.user = user
                return next()
            }
            return error(res, 401, 'Not authorized')
        } else {
            return error(res, 400, 'Token not found')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = exports = authTokenCheck
