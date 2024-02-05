// Create web server
import express from 'express';
var app = express();

// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello, World!');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
