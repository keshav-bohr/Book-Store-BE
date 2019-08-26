const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    },
    quantity: {
        type: Number,
        min: 0
    }
})

module.exports = exports = bookSchema