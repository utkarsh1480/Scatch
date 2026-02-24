const express = require('express');
const router = express.Router();
console.log(process.env.NODE_ENV);
const { handelCreateOwner } = require('../controllers/owner.js')
if (process.env.NODE_ENV == "development") {
  router.post('/create', handelCreateOwner);
}

router.get('/', (req, res) => {
  res.send("hey its working")
})
module.exports = router;
