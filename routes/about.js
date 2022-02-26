const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /about  ********');
  res.render('about');
});

module.exports = router;