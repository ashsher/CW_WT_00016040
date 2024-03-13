const express = require('express')
const user_router = require('./user')

const router = express.Router()

// process of registering the inner routes
router.use('/user', user_router)

module.exports = router