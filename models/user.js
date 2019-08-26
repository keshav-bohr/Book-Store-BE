const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = require('../schema/user')


userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const encryptedPassword = await bcrypt.hash(this.password, 10)
            this.password = encryptedPassword
        }
        next()
    } catch (error) {
        console.log(error)        
    }
})

userSchema.methods.verifyPassword = function (userSubmittedPassword) {
    return bcrypt.compare(userSubmittedPassword, this.password)
}

const userModel = mongoose.model('user', userSchema)

module.exports = exports = userModel