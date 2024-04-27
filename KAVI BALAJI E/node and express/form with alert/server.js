const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Display the form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    // Display collected values in an alert box
    res.send(`<script>alert("Username: ${username}\\nPassword: ${password}\\nMobile: ${mobile}\\nEmail: ${email}"); window.location.href='/';</script>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
