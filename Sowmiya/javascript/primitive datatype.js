 //Data Types in java script 


// divided into two types(categories)

// primitive   -- 7 
//==========

// --> string  
// --> Number
// --> Boolean
// --> null
// --> undefined 
// -->BigInt
// --> Symbol 

//Referenece - 3 
//==========


// --> Array 
// --> Object 
// --> Function 



// to check datatype ==> typeof



//string 

// --> used to store multiple of character

let name = "sowmiya";
let Name = "Sowmiya";

// methods in string 

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.length);
console.log(name.trim());
console.log(name.charAt(0));
console.log(name.indexOf("i"));

//number 

// used to store number and floating-point number 


let num =100; //number

let num1 = 96.5; // floating number 

let num2 = 100.0 // js convert to int 

console.log(num);
console.log(num1);
console.log(num2);
console.log(typeof(num1));  // output : number 

// Method 

console.log(num.toString());
console.log(num.toFixed(2))
console.log(num.toPrecision(5));




// Boolean 


// has two value : true and false 


let learning = true;
let completed = false ;

console.log(learning);
console.log(completed);
console.log(typeof(learning));
 
let x = 20>10; 
console.log(x);
console.log(typeof(x));



// undefined 

// if varaible is declared and not assign any value  then undefined is stored 

// then the type of varaible is undefined


let output ; // not assigned any value 

console.log(output);
console.log(typeof(output));



//null 

// null is equal to undefined


// is a specail  datatype 

let number = null;
console.log(number);
console.log(typeof(number)); //object ( known bug in js )




//diff between null and undefined 

// both do not have any value to the varaible 

// using null we are telling(explecit)  there is no value for the varaible

// using undefined it is considering there is no value for the varaible