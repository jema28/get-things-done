const express = require('express')

const router = express.Router()
const { getTodos } = require('../controllers/todos')

router.route('/').get(getTodos)

module.exports = router
