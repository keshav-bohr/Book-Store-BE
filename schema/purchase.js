const mongoose = require('mongoose')
const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    bookId: {
        type: mongoose.Types.ObjectId,
        ref: 'book',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
})

module.exports = exports = purchaseSchema