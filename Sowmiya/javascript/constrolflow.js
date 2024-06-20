
//contriol flow 

//1 -->conditioanl statements

const { compareSync } = require("bcrypt");

// if statemnet 
//else statemnt 
//else if statement 


//example  -->  if  and else 
 
let age = 16;

if(age > 18 ){
    console.log("allowd");
}
else{
    console.log("rejected");
}


//example  --> else if 

let country = "India";

let user_age = 18;

if(user_age >= 18 && country === "India"){
    console.log("adult");
}

else if(user_age >=16){
    console.log("teenager");
}

else{
    console.log("minor")
}


//2 --> switch 


//example 1:

let value = [];

switch(typeof value){
    case "number":
        console.log("Number");
        break;
    case "string":
        console.log("string");
        break;
    case "boolean":
        console.log("Boolean");
        break;
    default:
        console.log("others");
        break;
}


// example :2 

let dayname = 2;

switch(dayname){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid input");
        break;
}

// 3 --> Ternary operator  consition?true:false

//example 1:

let output1 = 10>20?true:false;

console.log(output1);


//example 2:

let Age =20;
let msg = Age > 18 ? "adult":"minor";

console.log(msg);









