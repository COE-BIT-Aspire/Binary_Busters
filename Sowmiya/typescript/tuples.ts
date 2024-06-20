
//tuples are mainly used for type safety 

//fixed length

//order of datatypes in array are matters in tuples


//simple example

let user:[string,number];
user =["sowmiya",90,];
console.log(user);


//    example using override tuples


let arrayvalues:[number,number,number];
arrayvalues=[123,456,789];
console.log(arrayvalues);
arrayvalues[1]=399; // change the value (over ride)
console.log(arrayvalues);


//wrong   --> because tuples fixed size 

// arrayvalues=[123,456,789,78];

//but using methods we can add this works but the wired thing this is 





//methods 


//example using push we can add in tuples

arrayvalues.push(10);
console.log(arrayvalues);

//pop

arrayvalues.pop();
console.log(arrayvalues);


//unshift

arrayvalues.unshift(678);
console.log(arrayvalues);



//shift

arrayvalues.shift();
console.log(arrayvalues);


//find 

const outputval:number|undefined=arrayvalues.find((num)=>{
    return num >2;
});
console.log(outputval);



//wrong   --> because tuples fixed size 

// arrayvalues=[123,456,789,78];


export{}