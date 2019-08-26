const router = require('express').Router()

const bookAdd = require('./add.js')
const bookDetails = require('./details.js')
const bookList = require('./list.js')
const bookUpdate = require('./update.js')
const bookPurchase = require('./purchase.js')

const authToken = require('../../middleware/authCheck')
const adminCheck = require('../../middleware/adminCheck')

router.use(authToken)
router.get('/', bookDetails)
router.get('/list', bookList)
router.put('/purchase', bookPurchase)

router.use(adminCheck)
router.post('/', bookAdd)
router.put('/', bookUpdate)

module.exports = exports = router