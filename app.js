// Add modules and files
const express = require('express');


// Create express app
const app = express();

// Set up middleware
app.set('view engine', 'pug');

// Set static server
app.use('/static', express.static('public'));

// Set routes
const rootRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');
app.use(rootRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

// Handle errors
// 404
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  console.log('\x1b[31m%s\x1b[0m', `${err.status} ${err.message}`);
  next(err);
});

// Global error
app.use((err, req, res, next) => {
  err.status = err.status || 500;
  
  if (err.status !== 404) {
    err.message = 'Oops! Looks like something went wrong';
  }

  console.log('\x1b[31m%s\x1b[0m', `${err.status} ${err.message}`);
  res.status(err.status);

  if (err.status === 404) {
    res.render('page-not-found', {err});
  } else {
    res.render('error', {err});
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'The application is running on localhost:3000!');
});