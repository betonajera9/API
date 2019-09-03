import User from '../models/user';

export const resolvers = {
  Qyery: {
    async getUsers() {
      return await User.findAll();
    },
    async getOneUser(_, {id}) {
      return await User.findOne({
        where: {
          id
        }
      });
    }
  },
  Mutations: {
    async createUser(_, {input}) {
      return await User.create(input);
    },
    updateUser(_, {id, input}) {
      return console.log('hola');
    }
  },
  async deleteUser(_, {id}) {
    return await User.destroy({
      where: {
        id
      }
    });
  }
};
