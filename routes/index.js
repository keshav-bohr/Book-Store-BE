const router = require('express').Router()

const bookRoutes = require('./book')
const userRoutes = require('./user')

router.use('/book', bookRoutes)
router.use('/user', userRoutes)

module.exports = exports = router