const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Don't forget to add your task!"],
    trim: true
  },
  status: {
    type: String,
    enum: ['To do', 'In progress', 'Completed'],
    default: 'To do'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  deadline: {
    type: Date
  },
  project: String,
  tags: {
    type: [String],
    trim: true
  },
  priority: {
    type: String,
    enum: ['Priority 1', 'Priority 2', 'Priority 3']
  },
  list: {
    type: String,
    enum: ['Inbox', 'Today', 'This Week', 'Someday']
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
