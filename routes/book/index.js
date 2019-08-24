const router = require('express').Router()

const addBook = require('./add.js')
const bookDetails = require('./details.js')
const bookList = require('./list.js')
const bookSell = require('./sell.js')
const bookPurchase = require('./purchase.js')

router.post('/', addBook)
router.get('/', bookDetails)
router.get('/list', bookList)
router.put('/sell', bookSell)
router.put('/purchase', bookPurchase)

module.exports = exports = router