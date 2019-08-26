const Book = require('../../models/book')
const error = require('../../utils/error')

async function updateBookHandler(req, res, next) {
    try {
        const { id, quantity } = req.body
        const bookFound = await Book.findById(id)
        if (!bookFound) {
            return error(res, 400, 'Book not found')
        }
        await bookFound.alterBookQuantity(quantity)
        res.json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = updateBookHandler
