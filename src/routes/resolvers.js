import User from '../models/user';

export const resolvers = {
  Query: {
    async getUsers() {
      return await User.findAll();
    },
    async getOneUser(_, {id}) {
      return await User.findOne({
        where: {
          id
        }
      });
    },
    async loginUser(_, {username, password}) {
      return await User.findOne({
        where: {
          username,
          password
        }
      });
    }
  },
  Mutation: {
    async createUser(_, {input}) {
      return await User.create(input);
    },
    updateUser(_, {id, input}) {
      return console.log('hola');
    },
    async deleteUser(_, {id}) {
      return await User.destroy({
        where: {
          id
        }
      });
    }
  }
};
