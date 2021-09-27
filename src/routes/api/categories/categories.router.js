const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const asyncHandler = require('express-async-handler')
const {
  getCategories,
  createCategory,
  deleteCategory,
} = require('./categories.controller.js')

router.get('/', asyncHandler(getCategories))

router.post('/', asyncHandler(createCategory))

router.delete(
  '/',
  body('category').isString().isLength({ min: 1, max: 30 }),
  asyncHandler(deleteCategory)
)

module.exports = router
