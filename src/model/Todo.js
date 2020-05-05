const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    timer: String
})

module.exports = mongoose.model('Todo', todoSchema);