// init modules
const express = require('express');
const router = express.Router();

// import route files
const users = require('./users')
const specialists = require('./specialists')
const deseases = require('./deseases')

// init routes

router.use('/users', users);
router.use('/specialists', specialists);
router.use('/deseases', deseases);

module.exports = router;