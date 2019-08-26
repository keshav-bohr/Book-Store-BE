const Book = require('../../models/book')

async function bookListHandler(req, res, next) {
    try {
        const title = req.query.title || ''
        const regex = new RegExp(`${title}`, 'i')
        const books = await Book.find({
            title: regex
        })
        res.json({
            success: true,
            books
        })
    } catch (error) {
        next(error)
    }
}

module.exports = exports = bookListHandler
