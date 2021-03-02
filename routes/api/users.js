const express = require('express');
const router = express.Router();

// Import our User model
const User = require('../../models/user');

// POST to /find
router.post('/find', (req, res, next) => {
  // Get the requested user
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.json({ error: err });
    }
    if (!user) {
      return res.json({ error: 'Username not found' });
    }
    const { username, albums, artists } = user;
    return res.json({ username, albums, artists });
  });
});

// GET User List.
router.get('/list', (req, res, next) => {

  // Find all matching users, which in this case is all of 'em
  User.find((err, users) => {
    if (err) {
      // if something's broken, send an error
      res.send(err);
    }
    // Otherwise, send the array of users.
    res.json(users);
  });
});

module.exports = router;