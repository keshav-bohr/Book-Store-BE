const router = require('express').Router()

const createUser = require('./create.js')

router.post('/', createUser)

module.exports = exports = router