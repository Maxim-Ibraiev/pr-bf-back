const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const asyncHandler = require('express-async-handler')
const {
  getProducts,
  createProduct,
  patchProduct,
  deleteProduct,
} = require('./products.controller.js')

router.get('/', asyncHandler(getProducts))

router.post('/', asyncHandler(createProduct))

router.patch('/:id', asyncHandler(patchProduct))

router.delete('/:id', asyncHandler(deleteProduct))

module.exports = router
