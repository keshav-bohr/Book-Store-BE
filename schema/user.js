const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type : String,
        required : true,
        minlength : 6
    },
    name: {
        type : String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = exports = userSchema