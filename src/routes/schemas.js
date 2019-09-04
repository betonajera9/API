import { ApolloServer, gql } from 'apollo-server-express';
import GraphQLJSON from'graphql-type-json';
import {resolvers} from './resolvers';

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getOneUser(id: Int): User
    loginUser(username: String, password: String): User
  }

  type User {
    id: Int
    username: String
    email: String
    password: String
    create_at: String
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: Int, input: UserInput): User
    deleteUser(id: Int!): User
  }

  input UserInput{
    username: String!
    email: String!
    password: String!
    create_at: String
  }
`;

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
});
