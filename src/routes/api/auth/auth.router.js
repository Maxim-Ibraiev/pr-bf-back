const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { login } = require('./auth.controller.js')

router.post('/auth', asyncHandler(login))

module.exports = router
