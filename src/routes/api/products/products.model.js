const products = require('../../../db/schemas/productsSchemas.js')

const listProducts = async () => await products.find()

const addProduct = async (newContact) => await products.create(newContact)

const removeProduct = async (id) =>
  await products.findByIdAndRemove({ _id: id })

const updateProduct = async (id, body) =>
  await products.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  })

module.exports = {
  listProducts,
  addProduct,
  updateProduct,
  removeProduct,
}
