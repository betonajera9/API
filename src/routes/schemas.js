import { ApolloServer, gql } from 'apollo-server-express';
import {resolvers} from './resolvers';

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getOneUser(id: Int): User
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
    updtaeUser(id: Int, input: UserInput): User
    deleteUser(id: Int!): User
  }

  type UserInput{
    usernmae: String!
    email: String!
    password: String!
    create_at: String!
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
