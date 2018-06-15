const User = require('../models/userModels');
const { mysecret } = require('../../config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({ username, password })
    .then(user => {
      const payload = {
        username: user.username
      };
      const token = jwt.sign(payload, mysecret);
      res.status(201).json({ user: user.username, token });
    })
    .catch(err => res.status(500).json(err));
};

function generateToken (user) {
  
}

module.exports = {
  createUser
};