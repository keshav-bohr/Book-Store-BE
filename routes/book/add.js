const Book = require('../../models/book')

async function createBookHandler(req, res, next) {
    try {
        const { title, quantity, description, author, price } = req.body
        const newBook = await Book.create({
            title, quantity, description, author, price
        })
        res.json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = createBookHandler
