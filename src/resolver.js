const todo = require('./model/Todo');

module.exports = {
    Query: {
        todoList: () => todo.find(),
        todo: (_ , {id}) => todo.findById(id)
    },

    Mutation: {
        createTodo: (_ , {title, timer}) => todo.create({title, timer}),
        removeTodo: (_, {id}) => todo.findByIdAndRemove(id).exec()
    }
}