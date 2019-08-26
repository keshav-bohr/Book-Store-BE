const book = require('../../models/book')

async function createBookHandler(req, res, next) {
    try {
        const { title, quantity, description, author, price } = req.body
        const newBook = new book({
            title, quantity, description, author, price
        })
        await newBook.save()
        res.json({
            success: true,
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = createBookHandler
