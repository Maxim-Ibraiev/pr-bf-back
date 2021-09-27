const validation = require('../middleware/validation.js')

const {
  listProducts,
  removeProduct,
  updateProduct,
  addProduct,
} = require('./products.model.js')

const getProducts = async (req, res, next) => {
  try {
    const products = await listProducts()
    if (products) {
      return res.status(200).json({ status: 200, data: products })
    }
    res.status(404).json({ status: 404, message: 'Not Found' })
  } catch (e) {
    next(e)
  }
}

const createProduct = async (req, res, next) => {
  try {
    await validation.product.validateAsync(req.body)
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message })
  }

  try {
    const newProduct = await addProduct(req.body)
    if (newProduct) {
      return res.status(200).json({ status: 200, data: newProduct })
    }
    res.status(404).json({ status: 404, message: 'Not found' })
  } catch (e) {
    next(e)
  }
}

const patchProduct = async (req, res, next) => {
  try {
    await validation.updateProduct.validateAsync(req.body)
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message })
  }

  try {
    const updatedProduct = await updateProduct(req.params.id, req.body)
    if (updatedProduct) {
      return res.status(200).json({ status: 200, data: updatedProduct })
    }
    res.status(404).json({ status: 404, message: 'Not found' })
  } catch (e) {
    next(e)
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await removeProduct(req.params.id)
    if (deletedProduct) {
      return res.status(200).json({ status: 200, data: deletedProduct })
    }
    res.status(404).json({ status: 404, message: 'Not found' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  createProduct,
  patchProduct,
  deleteProduct,
}
