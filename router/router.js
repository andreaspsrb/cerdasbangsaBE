const express = require('express');
const router = express.Router();
const user = require('../controller/User')

// API USER
router.get('/getuser', user.getAllData);


module.exports = router;