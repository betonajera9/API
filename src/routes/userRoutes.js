const express = require('express');
const router = express.Router();
const User = require('../Controllers/user.controllers');

router.get('/', (req, res) => {
  User.getUsers((err, data) => {
    res.status(200).json(data);
  });
});

router.post('/', User);

module.exports = router;
