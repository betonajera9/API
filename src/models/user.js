import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const users = sequelize.define('users', {
  username: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  },
  create_at: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

export default users;
