// used to store elemt in key value pairs 

const { compareSync } = require("bcrypt");
const e = require("express");

//declaration

let myMap = new Map();

// Methods in Map


//set ---> to the element

myMap.set('name','sowmiya');
myMap.set('age',21);

console.log(myMap);

//get  --> to get the value 

console.log(myMap.get('name'));

let name11 = myMap.get('name');
if(name11 === 'sowmiya'){
    console.log('true');
}


// has --> to find the key 
console.log(myMap.has('name'));



//delete the element 

myMap.delete('age');

console.log(myMap);


// size to egt the size 

console.log(myMap.size);

//forEach

myMap.forEach((value,key)=>{
    console.log(key+":"+value);
})

// program print the name who has age greater then 18

let Details = new Map();

Details.set('sowmiya',21);
Details.set('kavila',20);
Details.set('sushmeethaa',17);

Details.forEach((value,key)=>{
    if(value >= 18){
        console.log(key);
    }
});


