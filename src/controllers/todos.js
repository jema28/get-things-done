const Todo = require('../models/todos')

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find()

    res.status(200).json({
      status: 'success',
      results: todos.length,
      data: {
        todos
      }
    })
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err })
  }
}
