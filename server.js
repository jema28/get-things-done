const app = require('./app')
const env = require('dotenv')

env.config({ path: './config.env' })

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
