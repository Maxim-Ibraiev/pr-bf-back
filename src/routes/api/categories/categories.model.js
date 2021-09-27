const categories = require('../../../db/schemas/categoriesSchemas')

const listCategories = async () => await categories.find()

const addCategory = async (newCategory) => await categories.create(newCategory)

const removeCategory = async (categoryId) =>
await categories.findByIdAndRemove({ _id: categoryId })

module.exports = {listCategories,addCategory,removeCategory}