const User = require('../../models/user')

async function createUserHandler(req, res, next) {
    try {
        const { email, password, name } = req.body
        const newUser = await User.create({
            email, password, name
        })
        res.json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = createUserHandler
