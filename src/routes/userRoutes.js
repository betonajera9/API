const express = require('express');
const router = express.Router();
const {createUser, getUser, getOneUser, deleteUser, updateUser} = require('../Controllers/user.controllers');

// /api/users
router.get('/', getUser);
router.post('/', createUser);

// /api/users/:userID
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
