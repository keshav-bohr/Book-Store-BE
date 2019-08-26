const mongoose = require('mongoose')
const bookSchema = require('../schema/book')


bookSchema.methods.alterBookQuantity = async function (addQuantity, type = 'add') {
    if (type === 'add') {
        this.quantity += addQuantity
    } else {
        this.quantity -= addQuantity
    }
    await this.save()
}

const bookModel = mongoose.model('book', bookSchema)

module.exports = exports = bookModel