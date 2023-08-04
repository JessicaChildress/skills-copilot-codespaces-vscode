// Create web server
// 1. Use express to create web server
// 2. Use body-parser to parse the body of the request
// 3. Use cors to allow cross-origin requests
// 4. Use path to get the path of the current file
// 5. Use mongoose to connect to the database
// 6. Use morgan to log requests to the console
// 7. Use routes to handle requests

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

// Create web server
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// Connect to database
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Configure routes
app.use('/api', routes);

// Start listening
app.listen(3000);