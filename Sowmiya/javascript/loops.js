

// loop 

// to print multiply times we use loop

// while --> code will run for specified condition is true

// for loop --> code will run specified number of times

// do while ---> atleast the code have to run one time


//for loop

//example :1

for(let i =0;i<10;i++){
    console.log("hello");
}

//example 2:

for(let i=0;i<10;i++){
    console.log(i);
}

//example 3:

let program =["c","c++","js","python"];

for(let i=0;i<program.length;i++){
    console.log(program[i]);
}

// nested for loop 

let array =[1,2,3,4,5,6];
let val = 0;
let new_array =[];

for(let i =0;i<array.length;i++){
    for(let j =0;j<2;j++){
        val = val+array[i];
    }
    new_array.push(val);
    val =0;
}
console.log(new_array);


 

//while loop 

//syntax:


// while(condition){
//     //code 
// }


//example 

let i =0;

while (i<10){
    console.log(i);
    i++;
}


// do while  --> it will print atleat one time 

let value = 0;
do{
    console.log(value);
    value++;
}
while(value<10);



// break and continue 


// break;

for(let i=0;i<10;i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

// continue 

for(let i=0;i<10;i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}



  
// switch --> break and no continue
// if --> no break and no continue
// loops --> break and continue










