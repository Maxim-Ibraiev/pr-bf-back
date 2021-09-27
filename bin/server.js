const app = require('../app')
const db = require('../src/db/db.js')

const PORT = process.env.PORT || 4000

db.then(() => {
  app.listen(PORT, () => {
    console.log('Database connection successful')
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch((err) => {
  console.log(`Server not running. Error message ${err.message}`)
})
