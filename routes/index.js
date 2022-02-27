// Add modules and files
const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

// Set routes
router.get('/', (req, res) => {
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /  ********');
  res.locals.projects = projects;
  res.render('index');
});

// Export module
module.exports = router;