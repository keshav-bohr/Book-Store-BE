const router = require('express').Router()

const createUser = require('./create.js')
const login = require('./login.js')

router.post('/', createUser)
router.post('/login', login)

module.exports = exports = router