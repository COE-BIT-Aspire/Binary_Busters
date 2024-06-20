// functions

const { set } = require("mongoose");

// is a  block of code that can be reused 

// syntax 

// function functionName(){
    //code to be executed 
 


    // example :1 

    function greet(){
        console.log("hello i am sowmiya");
    }
    greet();


    // function with parameters and argument 

    function greets(first_name,last_name){ /// parameters
        console.log("hai "+first_name+" "+last_name)
    }

    greets("swomiya","viswanathan"); // arguments

    // we acn pass any type of arguments

    greets(100,200); // integer argumnets
    greets(100.5,true); // flaot and boolean arguments


    // default parameters

    // if argument is not passed it will take default parameter 

    function sum(x=0,y=0){ 
        console.log(x+y);
    }
    sum(10,20); //30
    sum(); //0
    sum(10); // 10;  // sum(x,y){return x+y}==> output:undefined


// Function return --> in js we can return the function also 

function fn1(x){
    function fn2(y){
        return x*y;
    }
    return fn2;
} 

let result = fn1(10);
console.log(result);
console.log(result(2));


// named function and unnamed function 

// named function 


function named(name){
    console.log(name);
}

named("sowmiya");

// unnamed function or anonymous function 

// function without name we can call this function using :

// 1--> using varaible 


let student_details = function(fisrtname,lastname){
    console.log("hai "+fisrtname+lastname);
}

student_details("sowmiya","V");

// 2--> using imeditialy invoke 

(function(a,b){
    console.log(a+b);
})(10,20);


//3 --> call back 

setTimeout(function(){
    console.log("This is set Timeout");
},2000);


// call back --> passing functions as an argument to other function 

function calculator(add,sub,mul,div){
    add(2,5);
    sub(10,5);
    mul(10,3);
    div(10,5);
}

function addition(a,b){
    console.log(a+b);
}

function subtract(a,b){
    console.log(a-b);
}

function multiplication(a,b){
    console.log(a*b);
}

function division(a,b){
    console.log(a/b);
}

calculator(addition,subtract,multiplication,division);




// arrow function --> es6 

setTimeout(()=>{
    console.log("after 5 seconds");
},5000);


// recursive function --> function calling itself (calling a function inside the function itself)

function output(val){
    if(val < 10){
        console.log(val);
        output(++val);
    }else{
        return ;
    }

}
output(1)