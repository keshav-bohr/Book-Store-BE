const Book = require('../../models/book')
const Purchase = require('../../models/purchase')
const error = require('../../utils/error')
const mongoose = require('mongoose')

let session

async function purchaseBookHandler(req, res, next) {
    try {
        const { email, bookId, quantity } = req.body

        session = await mongoose.startSession()
        session.startTransaction()

        const bookFound = await Book.findById(bookId)
        if (!bookFound) {
            return error(res, 400, 'Book not found')
        }
        await bookFound.alterBookQuantity(quantity, 'subtract')

        await Purchase.create({
            email, bookId, quantity
        })
        throw new Error('testing')
        await session.commitTransaction();
        session.endSession();

        res.json({
            success: true
        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error)
    }
}

module.exports = exports = purchaseBookHandler
