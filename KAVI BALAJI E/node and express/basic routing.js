const express = require('express');
const app = express();

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
