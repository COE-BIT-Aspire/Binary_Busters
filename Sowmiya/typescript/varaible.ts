

//  [ Datatypes --------> string and methods of string ] 


//declaration

let greetings:string = " hai hello i am sowmiya  ";

//methods in string 

greetings=greetings.toUpperCase();
console.log(greetings); //conver to uppercase

greetings=greetings.toLowerCase();
console.log(greetings); //convert to lowercase


let lengthofstring:number=greetings.length;
console.log(lengthofstring);//retrurn the length of the string


let greets:string=greetings.trim();
console.log("hai"+greets+"hai");// remove whitespace from both sides of the string


let index:number=greetings.indexOf("i")
console.log(index);// return the index of particular substring 


greetings=greetings.charAt(2);
console.log(greetings);// return the char at the particular index





// [Datatype ---> number]

let userId:number=3344.36789;
console.log(userId);


//methods in number

console.log(userId.toString()); // convert to string

console.log(userId.toFixed(2)); // after point only two value

console.log(userId.toPrecision(5)); //specified length




//[Datatype ---------->  boolean]


let isLoggedIn=false;

console.log(isLoggedIn);

// Methods in boolean

console.log(isLoggedIn.valueOf());


//[Datatype ----------> any]


//no typechecking takes place 
//mostly avoid any datatype

let value:any=1223;

let newvalue="sowmiya"; // automatically datatype consider as any
 

export{}  //without this error



