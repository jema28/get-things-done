const mongoose = require('mongoose')
const app = require('./app')
const env = require('dotenv')

env.config({ path: './config.env' })

const DB = process.env.DB_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err))

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
