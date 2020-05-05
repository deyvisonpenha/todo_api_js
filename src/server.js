const {GraphQLServer} = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolver');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deyvisonpenha:de_ison1@cluster0-faoju.mongodb.net/todo?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();