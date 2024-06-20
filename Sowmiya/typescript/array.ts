//syntax

// const array:number[]=[];

//const array:Array<number>=[]





//store number and string in the array 

const numberArray:number[]=[];
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray);

const stringArray:string[]=[];
stringArray.push("sowmiya");
stringArray.push("sowmi");
stringArray.push("kavila");
console.log(stringArray);



// store object in an array 

type User={
    name:string;
    isActive:boolean;
}

const allUser:User[]=[];

allUser.push({name:"sowmiya",isActive:true});
allUser.push({name:"kavila",isActive:true});

console.log(allUser);



// array with union [mixed datatype]


//Here either be a string or number

const data:(string|number)[]=[];
data.push("one");
data.push(2);
data.push("three");
console.log("mixedarray:")
console.log(data);



// methods in array 


// push --> adding element 

const methodArray:number[]=[];

methodArray.push(1);
methodArray.push(2);
methodArray.push(3);
methodArray.push(4);
methodArray.push(5);
methodArray.push(6);

console.log(methodArray);


//pop --> deleting element 

methodArray.pop(); //last element got removed

console.log("After pop:");

console.log(methodArray);


//filter method

//without changing the existing array stored in a new array 

//Tests each element of an array with a function and creates a new array

const evennumber:number[] = methodArray.filter((num)=>{
    return num%2 === 0;
});
console.log(evennumber);




// map  method 


//Applies a function to each element of an array and creates a new array


const doublenumber:number[] = methodArray.map((num)=>{
    return num*2;
});

console.log("new array:");
console.log(doublenumber);

console.log("methodArray:");
console.log(methodArray);



//reduce method 

//  reduce array to a single value 

// two parameter --> accumulator =0 (intial) and curentvalue

const sum:number = methodArray.reduce((accumulator:number,currentvalue:number)=>{
    return accumulator+currentvalue;
},0);  //0 --> initial value of acumalator 
console.log(sum);



//unshift method --> add atfirst 

methodArray.unshift(0);
console.log(methodArray);


//shift method --> remove at first 

methodArray.shift();
console.log(methodArray);


// find method ---> used to find the first element in the array

type datatype = number|undefined;
const found:datatype = methodArray.find((num:number)=>{
    return num>2;
});
console.log(found);




// foreach in array 

methodArray.forEach((num:number)=>{
    console.log(num);   
});














