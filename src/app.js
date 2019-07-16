const express = require('express')
const todoRouter = require('./routes/todos')

const app = express()

app.disabled('x-powered-by')
app.use(express.json())

app.use('/api/v1/todos', todoRouter)

module.exports = app
