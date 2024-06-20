// varabiles are used to store data 

// to declare the varaible we use three keywords : var,let and const 

// we can store any type like number,string,array and object 

// javascript is case sensitive 

//example : both are different 

var name = "sowmiya";
var Name ="sowmiya";

//exmaple : Var 
//============

// we can redecalre and reassign the value 

// var is functional  scope 

var x=30;
x=20; // reassign 
var x="sowmiya"; // redeclare 
var x =[1,2,3,4,5];

var depart = "ece";

if(depart === "ece"){
    var std_name = "sowmiya"; // global scope we can use any where
}
console.log(std_name);


//example : let 
//=============

// redeclaration is not posiible nad ressign is posible 

// block scope 

let value = 10;
value = 20; // reassign 

//let value = "sowmiya" redeclaration is not possible 


let mark =30;

if(mark > 25){
    let grade ="A"; // block scope , we can use only inside this block 
}

//console.log(grade); grade is block scope we cannot access here 

// example : const 
//=================

// no redeclaration and no reassign 

// block scope 

const pi =3.14;
//  pi = 67.8;  no reassign 
// const pi = 23.78; no declaration 

if(pi === 3.14){
    const math = 10;   // block scope 
}
// console.log(math);


// Three type of scope :

// global scope , functional scope and block scope 

// global scope --> we can use any where in the program ( when varaible and funaction are declared as global scope)

//example:

var x="hello";

function example(){
    console.log(x);
}

example();

console.log(x);


// functional scope 

// when we declare the varaible and functiona inside the function we can use the varaible only inside the function not from outside 

// example 

function example1(){
    var fs = "hello";
    console.log(fs);
}
example1();
// console.log(fs); caanot access we cannot use the fs outside the function 



//block scope 

// acess the varaible within the block 

//example

function example3(){
    if(true){
        let by ="hai";
        console.log(by); // block scope 
    }
    // console.log(by); cannot access
}
example3();




