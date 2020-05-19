const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false 
    },
    timer: String
})

module.exports = mongoose.model('Todo', todoSchema);