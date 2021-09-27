const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// const contactsRouter = require('./routes/api/contacts/contacts.router')
// const userRouter = require('./routes/api/user/user.router')
const categoriesRouter = require('./src/routes/api/categories/categories.router')
const productsRouter = require('./src/routes/api/products/products.router')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
app.get('test') !== 'test' && app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// app.use('/api/contacts', contactsRouter)
// app.use('/users', userRouter)
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

app.use((req, res) => {
  res.status(404).json({ status: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ status: 500, message: err.message })
})
module.exports = app
