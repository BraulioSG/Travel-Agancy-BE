// Todo ENDPOINT de Users
const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/users')

router.get('/', getUsers);
router.get('/', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;