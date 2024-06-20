//set 

const { compareSync } = require("bcrypt");

//do not allow duplicate values
//collection of unique values 


// declaration 

let number = new Set();


// Methods 

// add --> to add the element 


number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);

console.log(number);


//delete  --> to delete the element 

number.delete(3);
console.log(number);



// has --> to find the elemt present or not 

let output = number.has(3);
console.log(output);


// size 

console.log(number.size);


//forEach 

number.forEach((num)=>{
    console.log(num);
})


// clear() ---> empty the set 

number.clear();

console.log(number);


