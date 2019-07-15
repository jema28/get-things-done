const express = require('express')
const app = express()

app.disabled('x-powered-by')
app.use(express.json())

app.get('/api/v1/todos', (req, res) => {
  res.send('todos')
})

module.exports = app
