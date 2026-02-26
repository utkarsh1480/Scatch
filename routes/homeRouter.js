const express = require('express');
const router = express.Router();
const userMiddleware = require('../middlewares/userMiddleware.js')
const { handelHomePage } = require('../controllers/home.js')
router.get('/home', userMiddleware, handelHomePage );
module.exports = router;