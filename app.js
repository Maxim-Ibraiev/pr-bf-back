const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const categoriesRouter = require('./src/routes/api/categories/categories.router')
const productsRouter = require('./src/routes/api/products/products.router')
const adminRouter = require('./src/routes/api/auth/auth.router')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.get('test') !== 'test' && app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)
app.use('/admin', adminRouter)

app.use((req, res) => {
  res.status(404).json({ status: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ status: 500, message: err.message })
})
module.exports = app
