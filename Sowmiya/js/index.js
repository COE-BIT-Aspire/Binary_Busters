




//----------->named function  Exampel:




// var x=7;

// function getName(){
//     console.log("hello world");
// }
// getName();
// console.log(x);





// getName();
// console.log(x); 

// var x=7;

// function getName(){
//     console.log("hello world");
// }






// function getName(){
//     console.log("hello world");
// }

// console.log(getName);




// console.log(getName);

// function getName(){
//     console.log("hello world");
// }







// -------------->unnamed functions example:




//type 1: unnamed 




// console.log(x);
// console.log(getName);
// console.log(getName2);


// var x=7;  //undefined


// var getName = ()=>{    //undefined 
//     console.log("Hello World");
// }


// var getName2 = function (){
//     console.log("hello world")
// }









// var x=7;  //undefined


// var getName = ()=>{    //undefined 
//     console.log("Hello World");
// }


// var getName2 = function (){
//     console.log("hello world")
// }


// console.log(x);
// console.log(getName);
// console.log(getName2);




// var x=7;  //undefined


// var getName = ()=>{    //undefined 
//     console.log("Hello World");
// }


// var getName2 = function (){
//     console.log("hello world")
// }


// console.log(x);
// getName();
// getName2();









// console.log(x);
// getName();
// getName2();


// var x=7;  //undefined


// var getName = ()=>{    //undefined 
//     console.log("Hello World");
// }


// var getName2 = function (){
//     console.log("hello world")
// }




//type 2: unnamed 


// (function(){
//     console.log("hello");
// })();    // self executing 



// (()=>{
//     console.log("world");
// })();      // self executing --> invoke imediately 











// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }
// a();
// b();








//-------------> var  redeclaration  possible





// var  x=1;
// var x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }





//---------->let redeclaration not possible


// let  x=1;
// let x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }








//-----------> const redeclaration not possible




// const  x=1;
// const x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }











// var - redeclaration  --------->











// var  x=1;
// console.log(x);
// a();
// b();


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }







//let redeclaration ------------->







// let  x=1;
// console.log(x);

// a();
// b();


// function a(){
//     let x=10;
//     console.log(x);
// }

// function b(){
//     let x=100;
//     console.log(x);
// }






// const redeclaration------------------>





// const x=1;
// console.log(x);

// a();
// b();


// function a(){
//     const x=10;
//     console.log(x);
// }

// function b(){
//     const x=100;
//     console.log(x);
// }




//----------------------------------> scope


//  var a=10; // global scoble 

//  function b(){
//      var x=10;  // functional scope
//        {
//         let b =10; // block scope
//        }
// }


// example: 1 global 

// var a=10;

// function b(){
//     c();
//     function c(){
//         console.log(a);
//     }
// }

// b();



//example 2:  functional

// function a(){
//     var b=10;
//     function c(){
//         console.log(b);
//     }
// }
// a();  
// console.log(b);



//example 3: block scope:

//example:1

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



//example:2
 
// var a=10; 
// {
//     var a=30;
//     console.log(a);
// }
// console.log(a);

 

//example:3

// let a=10;
// {
//     var a=20;
// }

// console.log(a);









// ----------->  undefined  vs not defined




// undefined    like placeholder 


// console.log(a);
// var a=10;
// console.log(a);



// var a;
// console.log(a);



// var a;
//  if(a === undefined){
//     console.log(" a is undefined");
//  }
//  else{
//     console.log("a is not undefined");
//  }




// not defined 

// console.log(x);






// javascript --> loosly type language 


// datatype ------------------------> variables 



// var--------------------->

// redeclaration possible 

// var a;
// console.log(a);
// a=10;
// console.log(a);
// a="sowmiya"
// console.log(a);
// a=true;
// console.log(a);
// a=6.8
// console.log(a);



//example:



// var  x=1;
// var x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }





// let --------------------------> intilize  important  

// error --- cannot access a /not a is not defined 

// reserved place memory 

// redeclartion not possible;



//example:1


// console.log(a); 
// let a=10;



//example:2


// let a=10;

// console.log(a);


//example:3


// let  x=1;
// let x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }






// const ------------------------->

//even more strict than let

//declaration and initialization as same time



//eample:  wrong

// const b;
// b=100;
// console.log(b);



//example:  re initailization is not possible 

// const b=1000;
// b=200;

// console.log(b);



//example: redeclaration is not possibel


// const  x=1;
// const x=2;
// console.log(x);


// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }






//conclusion:


// var --> functional scope

// let and  const ---> block scope 




// function value(){ 
//     {
//         var a=10;
//         let b=20;
//         const c=30;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// value();





// closure -----------------------------> functions bundel together



// example 1: return the function 

// function b(){
//     var a=10;
//     function c(){
//         console.log(a);
//     }
//     return c;
// }
// var d = b();
// console.log(d);
// d();






//--------------------------> setTimeout 


//example:1

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     console.log("hai");
// }
// x();



// function x(){
//     var i=1;
//     setInterval(function(){
//         console.log(i);
//     },1000);
// }
// x();


// function x(){
//     var i=1;
//     clearInterval(function(){
//         console.log(i);
//     });
// }
// x();








 
//-------------------------->call back function

//synchronous single thread 

//  inside js we can implement asynocronus using callback 


//example 1: syncronous

// function a(callback){
//     callback();
// }
// a(function y(){
//     console.log("hai");
// });



//example 2: asynchronous


// setTimeout(function(){
//     console.log("I am sowmiya");
// },2000);

// function a(){
//     console.log("hello");
// }
// function b(){
//     console.log(" All ,");
// }

// a();
// b();


// Array -------------------------->

// syntax :let cities =["chennai","Madurai"]






//Array ---> different datatype store


// var arr=[1,0.7,"sowmiya",true];

// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }



// ---------->2D array

// var arr=[[1,2,3],[4,5,6]];
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }


//length ---> to find length

// var cities=["chennai","Mumbai","Bangalore"];
// console.log(cities.length);
// console.log(cities[0]);
// console.log(cities[cities.length-1]);



// push -----> add at last 

// var arr=["sowmiya","kavila"];
// arr.push(1);
// console.log(arr);



// pop ----> remove last element 

// let arr=[1,2,3,4,5,6];
// arr.pop();
// console.log(arr);




//unshift --> add at first 

// let arr=[1,2,3,4,5];
// arr.unshift("sowmiya");
// console.log(arr);



// shift --> rome first elment

// let arr=[1,2,3,4,5,6]
// arr.shift();
// console.log(arr);



//splice ---> remove at center

// let arr=[1,2,3,4,5,6];
// arr.splice(2,1);
// console.log(arr);

// let arr=[1,2,3,4,5,6];
// arr.splice(2,2);
// console.log(arr);


// splice ---> delete and insert


// var arr=[1,2,3,4,5,6,7]
// arr.splice(1,1,3);
// console.log(arr);


// splice ---> insert value without deleting 

// var arr=[1,2,3,4,5,6,7];
// arr.splice(1,0,10);
// console.log(arr);




//slice to get particticular array

// let arr=[1,2,3,4,5,6,7]
// console.log(arr.slice(1,3));



//reverse---> reverse an array

// let arr=[1,2,3,4,5,6,7]
// console.log(arr.reverse());



//join --> convert array  to string 


// let arr=[1,2,3,4,5,6,7];
// console.log(arr.join());



//map ---> store the content of array to other other 



// let arr =[5,1,3,2,6];

// function print(x){
//     return x*1;
// }

// let newarr = arr.map(print);

// console.log(newarr);


// var array=[1,2,3,4,5];

// var newarray=array.map((x)=>{
   
//     return x*1;
// })

// console.log(newarray);





//filter ---> used to filter value


// let arr=[1,2,3,4,5,6,7,8];

// let newarr = arr.filter((x)=>{
//     if(x%2==0){
//         return x;
//     }
// })
// console.log(newarr);





// let arr=[1,2,3,4,5,6,7,8];

// function isEven(x){
//     if(x%2==0){
//         return x;
//     }
// }

// let newarr = arr.filter(isEven);
// console.log(newarr);





//-------------> reduce array to singel value

// let arr=[1,2,3,4,5];

// let newval = arr.reduce(function(acc,curr){
//     console.log(acc,curr);
//     acc=acc+curr;
//     return acc;
// })
// console.log(newval);



// let arr=[1,2,8,9,5];

// let newval = arr.reduce(function(acc,curr){
//     console.log(acc,curr);
//     if(curr > acc){
//         acc=curr;
//     }
//     return acc;
// })
// console.log(newval);



 































 










 


 


































