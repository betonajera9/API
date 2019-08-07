const Project = require('../models/user');

async function createUser(req, res) {
  const {username, email, password} = req.body;
  try {
    let newUser = await Project.create({
      username,
      email,
      password
    });
    if (newUser) {
      res.json({
        message: 'Project created successfully',
        data: newProject
      });
    }
  }catch (err) {
    res.status(500).json({
      message: 'Somethings grong'
    });
  }
}

module.exports = createUser;
