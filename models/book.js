const mongoose = require('mongoose')
const bookSchema = require('../schema/book')


bookSchema.methods.addBookQuantity = async function (addQuantity) {
    this.quantity += addQuantity
    await this.save()
}

const bookModel = mongoose.model('book', bookSchema)

module.exports = exports = bookModel