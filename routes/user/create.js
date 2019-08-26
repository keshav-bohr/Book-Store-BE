const User = require('../../models/user')

async function createUserHandler(req, res, next) {
    try {
        const { email, password, name } = req.body
        const newUser = new User({
            email, password, name
        })
        await newUser.save()
        res.json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = createUserHandler
