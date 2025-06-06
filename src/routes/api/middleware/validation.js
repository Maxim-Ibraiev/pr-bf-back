const Joi = require('joi')

const images = Joi.array().items(
  Joi.object({
    original: Joi.string().min(1).max(999),
    thumbnail: Joi.string().min(1).max(9999),
    color: Joi.array().min(1).max(99),
  })
)

const product = Joi.object({
  images,
  title: Joi.string().min(3).max(1000).required(),
  description: Joi.string().min(3).max(1000).required(),
  globalCategory: Joi.string().min(3).max(999).required(),
  category: Joi.string().min(3).max(999).required(),
  price: Joi.number().min(1).max(999999),
  colors: Joi.array().items(Joi.string().min(1).max(1000)),
  model: Joi.string().min(3).max(1000),
  sizes: Joi.array().items(Joi.string().min(1).max(1000)),
  material: Joi.array().min(1).max(99),
  season: Joi.string().min(3).max(999),
  popularity: Joi.number().min(-999).max(999999),
  creator: Joi.string().min(0).max(99).optional(),
})

const updateProduct = Joi.object({
  images,
  title: Joi.string().min(3).max(1000),
  description: Joi.string().min(3).max(1000),
  material: Joi.array(),
  price: Joi.number().min(1).max(999999),
  colors: Joi.array().items(Joi.string().min(1).max(1000)),
  model: Joi.string().min(3).max(1000),
  sizes: Joi.array().items(Joi.string().min(1).max(1000)),
  globalCategory: Joi.string().min(3).max(999),
  category: Joi.string().min(3).max(999),
  season: Joi.string().min(3).max(999),
  popularity: Joi.number().min(-999).max(999999),
  creator: Joi.string().min(0).max(99).optional(),
})

const login = Joi.object({
  login: Joi.string().min(1).max(99),
  password: Joi.string().min(1).max(99),
})

module.exports = { product, updateProduct, login }
