const express = require('express');
const router = express.Router();
const { handelSignupUser , handelLoginUser} = require('../controllers/user');

router.post('/signup', handelSignupUser);
router.post('/login', handelLoginUser);
router.get('/', (req, res) => {
  res.send("hey its working")
})
module.exports = router;
