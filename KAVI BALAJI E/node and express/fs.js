const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Write to a file
fs.writeFile('newfile.txt', 'Hello, this is new content!', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written');
});