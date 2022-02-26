// Add modules and files
const express = require('express');
const {projects} = require('./data.json');

// Create express app
const app = express();

// Set up middleware
app.set('view engine', 'pug');

// Set static server
app.use('/static', express.static('public'));

// Set routes
app.get('/', (req, res) => {
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /  ********');
  res.locals = data.projects;
  res.render('index');
});

app.get('/about', (req, res) => {
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /about  ********');
  res.render('about');
});

app.get('/project/:id', (req, res) => {
  const {id} = req.params;
  console.log('\x1b[33m%s\x1b[0m', '********  GET on /project/:id  ********');
  // console.log(projects[id]);
  res.locals.info = projects[id];
  res.render('project');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('\x1b[36m\x1b[1m%s\x1b[0m', 'The application is running on localhost:3000!');
});