const express = require('express');
const router = express.Router();
const { handelSignupUser , handelLoginUser} = require('../controllers/user');

router.post('/signup', handelSignupUser);
router.post('/login', handelLoginUser);
router.get('/signup', (req, res) => {
  res.render('signup');
})
router.get('/login', (req, res) => [
  res.render('login')
])
module.exports = router;
