const express = require('express');
const router = express.Router();
const user = require('../controller/user')

// API USER
router.get('/getuser', user.getAllData);
router.post('/addOneUser', user.addOneData);
router.post('/editOneUser', user.editOneData);
router.post('/deleteOneUser', user.deleteOneData);

module.exports = router;