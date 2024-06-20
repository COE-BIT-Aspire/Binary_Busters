// objects 


// javascript object are non-primitive datatype 

// used to store collection of property or data

// each property is a key -value pair 

// key  is always stored as string 

// for value we can store any type 

//syntax 

// const object_name ={}

const person ={
    first_name:"sowmiya", //"first_name":"sowmiya", --> then access using [] only 
    last_name:"viswanathan",
    age:21,
    address:{
        street:"Tesla Road",
        city:"Austin",
        state:"Texas",
        country:"United States"
    }
}

console.log(typeof person);


// 1) access the property  (using key) 

// --> using (.)notation

console.log(person.first_name);
console.log(person.address.city); // nested object access through the (.) notation
  
//--> backet [""] notation

console.log(person["last_name"]);

//2) update the property

person.first_name ="kavila";
console.log(person.first_name);

// 3) add the property

person.company = "Aspire";
console.log(person);

// 4) delete the property 

delete person.age;
console.log(person);


// To check property exist or not 

// in

console.log("age" in person);

console.log("first_name" in person);

// for in loop ---> access all property without the property name

for (let prop in person ){
    // to access the key 

    console.log(prop);

    // to access the value 
    console.log(person[prop]); //not working 
}



// creating a object using new keyword 


const Person = new Object();

// add property 

Person.firstName = "sowmiya";
Person.lastName ="viswanathan";
Person.Age =21;

console.log(Person);

// const Person = new Object({
//     Person.firstName:"sowmiya";
//     Person.lastName:"viswanathan";
//     Person.Age :21;
// });

// object Methods  --> function inside the object 

const person1 ={
    FirstName:"sowmiya",
    LastName:"Viswanatahn",
    greet:function(){ // methods
        console.log("hello");
    }
}

console.log(person1.greet());

// adding function as property 

function department(){
    console.log("ece");
}

person1.depart = department;
console.log(person1);



//this -- keyword //outside --> window refeer global object 

// this --> refers to same objects  / cuureent object 

// when we need to access the property inside the object of the method use this 

const person2 ={
    FirstName:"sowmiya",
    LastName:"Viswanatahn",
    greet:function(){ // methods
        console.log("hello "+this.FirstName);
    }
}

person2.greet();


//example 


const person3 ={
    FirstName:"sowmiya",
    LastName:"Viswanatahn",
    full_name : function(){
        return this.FirstName + this.LastName;
    }
}

let output = person3.full_name();
console.log(output);



// constructor Function 

// to create multiple similar object we can sue cosntructor function 

function Person5(){
    this.firstName ="sowmiya",
    this.lastName = "value"
}

// to create a object for the constructor function use new keyword 

const person6 = new Person5();
const person7 = new Person5();
const person8 = new Person5(); // multiple object 

console.log(person6);
console.log(person7);


// constructor function parameter 

function Details(first,last){
    this.first_name = first,
    this.last_name = last
}

const std_1 = new Details("sowmiya","viswanthan");
const std_2 = new Details("kavila","viswanthan");



// add property 

std_1.age = 52;
console.log(std_1);

std_1.fullname =function(){
    console.log(this.first_name+this.last_name);
}

std_2.fullname =function(){
    console.log(this.first_name+this.last_name);
}

std_1.fullname();
std_2.fullname();

// to access the property
std_2.age = 52;
console.log(std_2.age);




// javascript object prototype 

// every function and object has own property called property 

// prototype is also an another object 

// prototype ==== object, then prototype has its own  prototype then its cretae prototype chain 

// we acn use prototype to add properties and methods to a constructor function 



//example --> why prototype 


// when we add the property using the objecct that property is availabke only for the particular object 

// so after declartion we cannot add the common property fro all object but we can addd using the prototype 

//example 

function example(){
    this.age = 43;
}


let example1 = new example();

example1.name = "sowmiya";  // this proprty is add only to example1
  

let example2 = new example();

console.log(example1); // output : example 1 = example { age: 43, name: 'sowmiya' }

 
console.log(example2); //output: example 2 = example { age: 43 }



// if we want to add the property common  --> use prototype 

// inherit from prototype fumction

function employee_details(id,name){
    this.emp_id = id;
    this.name = name;
}

employee_details.prototype.company = "Aspire";  // employee_details.company = "Aspire"; --> property is not added 


// add method 

function Full_Name(){
    return this.company;
}

employee_details.prototype.full_name=Full_Name;

let empl1 = new employee_details(123,"sowmiya");
let empl2 = new employee_details(456,"kavila");

console.log(empl1.full_name());
console.log(empl2);




// object destructing in javascript 

//used to store  object property in a varaible 


// old method --> to store the property to the varaible 
   
let name1 ={
    firstNmae : "sowmiya",
    lastNmae : "viswanthan"
}

let first_name1 = name1.firstNmae;

console.log(first_name1);

// es6 introduce object destructing 

let{firstNmae:fname , lastNmae:lname}=name1;
console.log(fname);

// or 

let{firstNmae, lastNmae}=name1;
console.log(lastNmae);

//or

// wehen we use extra prperyy 


// let{firstNmae, lastNmae ,age }=name1;
// console.log(age);  // undefined 



