//Array 

const { compareSync } = require("bcrypt");
const e = require("express");

// stores a collections of data 

// array is the type of object 

// we can store any type of datatype to array 

//example --> number array 

let number =[1,2,3,4,5];
console.log(typeof(number));  // object 


// any type 

let person =["sowmiya",21,true,67.9];

console.log(person);



// methods in array 

let employee = [];

//push 


employee.push("Sowmiya");
employee.push(21);
employee.push("BIT");
employee.push("Ruckus");
employee.push("40,000");
console.log(employee);

//pop

employee.pop();
console.log(employee);

//unshift 

employee.unshift("v");
console.log(employee);

//shift 

employee.shift();
console.log(employee);

//forEach 

employee.forEach((details)=>{
    console.log(details);
})

// find 

let employee_name = employee.find((details)=>{
    if(details != undefined){
        return details;
    }
})

console.log(employee_name);
console.log(typeof(employee_name));



// map --> store it in new array 

let emp_details = employee.map((details)=>{
    if(typeof(details)===number){
        return details*2;
    }else{
        return details;
    }
})

console.log(emp_details);
console.log(typeof(emp_details));

// filter --> do some testing and store it in new array 

let new_Array = employee.filter((details)=>{
    if(typeof(details) != undefined){
        return details;
    }
})
console.log(new_Array);
console.log(typeof(new_Array));



//reduce --> convert array to single  value

let output = employee.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(output);
console.log(typeof(output));


//length of an array 

console.log(employee.length);


