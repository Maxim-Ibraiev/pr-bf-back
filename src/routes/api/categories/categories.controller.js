const {
  listCategories,
  addCategory,
  removeCategory,
} = require('./categories.model.js')

const getCategories = async (req, res, next) => {
  try {
    const categories = await listCategories()
    const categoriesToFlatArr = categories.map((el) => el.category)
    res.status(200).json({ data: categoriesToFlatArr })
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

const createCategory = async (req, res, next) => {
  try {
    const newCategory = await addCategory(req.body)

    res.status(200).json({ data: newCategory })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await removeCategory(req.body.id)

    res.status(200).json({ data: deletedCategory })
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}

module.exports = { getCategories, createCategory, deleteCategory }
