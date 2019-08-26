const error = require('../utils/error')

async function adminAuthCheck(req, res, next) {
    try {
        if (req.user && req.user.isAdmin) {
            return next()
        }
        return error(res, 401, 'Not authorized')
    } catch (error) {
        next(error)
    }
}

module.exports = exports = adminAuthCheck
