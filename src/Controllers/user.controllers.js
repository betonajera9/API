const User = require('../models/user');

async function createUser(req, res) {
  const {username, email, password} = req.body;
  try {
    let newUser = await User.create({
      username,
      email,
      password
    });
    if (newUser) {
      return res.json({
        message: 'Project created successfully',
        data: newUser
      });
    }
  }catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Something\'s wrong'
    });
  }
}

async function getUser(req, res) {
  try {
    const users = await User.findAll();
    res.json({
      data: users
    });
  }catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Something\'s wrong'
    });
  }
}

async function getOneUser(req, res) {
  try {
    const {id} = req.params;
    const user = await User.findOne({
      where: {
        id
      }
    });
    res.json(user);
  }catch (err) {
    console.log(err);
    res.status(500).json({
      messange: 'Something\'s wrong'
    });
  }
}

async function deleteUser(req, res) {
  try {
    const {id} = req.params;
    const deleteRowCount = await User.destroy({
      where: {
        id
      }
    });
    res.json({
      message: 'Project delete successfully',
      count: deleteRowCount
    });
  }catch (err) {
    console.log(err);
    res.status(500).json({
      messange: 'Something\'s wrong'
    });
  }
}

async function updateUser(req, res) {
  try {
    const {id} = req.params;
    const {username, email, password} = req.body;
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'password'],
      where: {
        id
      }
    });

    if (users.length > 0) {
      users.forEach(async user => {
        await user.update({
          username,
          email,
          password,
          create_at
        });
      });
    }

    return res.json({
      message: 'Project updated succesfully',
      data: users
    });
  }catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Something\'s wrong'
    });
  }
}

module.exports = {
  createUser,
  getUser,
  getOneUser,
  deleteUser,
  updateUser
};
