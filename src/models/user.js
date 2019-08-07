const Sequelize = require('sequelize');
const {sequelize} = require('../database/database');

const users = sequelize.define('users', {
  username: {
      type: Sequelize.TEXT
    },
  email: {
    type: Sequelize.TEXT
  },
  create_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

module.exports = users;
