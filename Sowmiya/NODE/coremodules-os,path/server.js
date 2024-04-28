// node --- run on server 

//core module --- os , path,fs

// import os 

const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log("--------------");



// import path 

const path = require('path');

console.log(path.dirname(__filename));
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename)); // return object 

console.log("--------------");


// own modules 

const math = require('./math');

console.log(math.add(3,3));
console.log(math. subtract(3,3));
console.log(math.muliply(3,3));
console.log(math. division(3,3));

