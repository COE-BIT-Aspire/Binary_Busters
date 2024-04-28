const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filePath = './';
    if (req.url === '/') {
        filePath += 'home.html';
    } else if (req.url === '/login.html') {
        filePath += 'login.html';
    } else if (req.url === '/signup.html') {
        filePath += 'signup.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
