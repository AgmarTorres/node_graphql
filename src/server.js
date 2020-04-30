//import { GraphQLServer } from 'graphql-yoga'
const { GraphQLServer } =  require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require( 'mongoose')
mongoose.connect('mongodb://localhost/graphqlnode',{
  useNewUrlParser: true,
})

  //Os Controlers são chamados de resolvers
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();


//Localhost:4000
/* 
Todos os Usuários
  query{
    users{
      id
      name
      email
    }
  }


   query{
    users{
      id
      name
    }
  }

mutation{
  createUser(name: "Agmar", email: "agmartorres@gmail.com")
  {id}
}

*/