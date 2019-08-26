const book = require('../../models/book')

async function bookDetailsHandler(req, res, next) {
    try {
        const { id } = req.query
        const bookFound = await book.findById(id)
        res.json({
            success: true,
            book: bookFound
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = bookDetailsHandler
