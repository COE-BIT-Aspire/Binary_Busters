const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Apply middleware globally
app.use(logger);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
