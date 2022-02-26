const express = require('express');
const router = express.Router();
const {projects} = require('../data/data.json');

router.get('/:id', (req, res) => {
  const {id} = req.params;
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /project/:id  ********');
  res.locals.project = projects[id];
  res.render('project');
});

module.exports = router;