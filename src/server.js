const { createServer } = require('@graphql-yoga/node');
const { loadFile } = require('graphql-import-files');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
});

const server = createServer({
  schema: {
    typeDefs: loadFile('./src/schema.graphql'),
    resolvers,
  }
})

server.start();
