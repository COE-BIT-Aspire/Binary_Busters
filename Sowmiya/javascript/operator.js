//operators 

// used to perform operations on operands

// operands is values or varaiables 


// Operators in Javascript  - 5 

// --> Arithmetic Operators 
// --> Assignment Operators 
// --> Comaparison Operators 
// --> Logical Operators 
// --> String Operators 



// --> Arithmetic Operators  --> used to perform mathametical calculation 

// +

let sum = 5+3;
console.log(sum);

// -

let sub = 10 - 5;
console.log(sub);

//*

let mul = 10* 3;
console.log(mul);

// / 

let div = 15/3 ;
console.log(div);

// % 

let rem = 10%3;
console.log(rem);


// expoenential **

let exp = 2**4 // 2*2*2*2
console.log(exp);



// --> Assignment Operators  --> use to assign value to the varaibles 


// = assignment 
let x =5;
console.log(x);

//+= addition assignment

x += 5;  // x=x+5;
console.log(x);


//-= subtraction assignment

x -= 5;  // x=x-5;
console.log(x);


//-= multiplication assignment

x *= 5;  // x=x*5;
console.log(x);


// /= divison assignent 

x /=5;
console.log(x);

// %= modulus assignment 

x %= 2;
console.log(x);

// **= exponential assignment  

x **= 5;
console.log(x);


// increment ++ increment value by 1;

//pre increment 

x =10;
console.log(++x);

//post increment 

x =11;
console.log(x++);
console.log(x);



//decrement operator --  decrement by 1 

// pre decrement 

x = 25;

console.log(x);
console.log(--x);

// post decrement 

x = 67;
console.log(x);
console.log(x--);
console.log(x);



// --> Comaparison Operators  --> used to compare two values and return the boolean : true or false 

// > 
// < 
// >=
// <=
// ==
// !=
// === ( strict type strictly equal operator)
// !== (strict type)

//example 


let a =10;
let b = '10';

console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b); // true 
console.log(a!=b);
console.log(a===b); // false it will check datatype  too 
console.log(a!==b);


//Logical Operators 

// perform logical opertation --> && ,|| and !

//Evaluate the operands and return : true or false

// && --> both true ==> true 
// || --> either one true ==> true 
// ! 

// example &&

let x1 = 10;
let y1 = 20;

console.log(x1>0 && y1>0);
console.log(x1<0 && y1>0); // false 

// example ||
console.log(x1<0 || y1>0); // true


// not ||   --> filped the value and return boolean 

let Yes = true ;
console.log(!Yes);


// string operators 

// using operator to string 

let stringval = "hai"+"hello";

console.log(stringval);

stringval += " I am sowmiya";

console.log(stringval);




