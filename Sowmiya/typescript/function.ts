

// syntax:

// function functioname(argument with type):return type{

// }


//named functions 


//return type ---> string named function

function greetings(message:string):string{
    return "hai "+message;
}
const greets:string = greetings("sowmiya");
console.log(greets);




//return type --> number  named function 


function sumArray(array:number[]):number{
    let total=0;
    for(var i=0;i<array.length;i++){
        total=total+array[i];
    }
    return total;
}
const array:number[]=[1,2,3,4,5];
let totalsum :number = sumArray(array);
console.log(totalsum);



//return type ---> void named functions 

function signUpUser(name:string,email:string,isPaid:boolean):void{

}//doesnot return anything 

signUpUser("sowmiya","sowmiya@gmail.com",false); 




//optional parameter namedfunction (?:)

function add(num1:number,num2:number,num3?:number):number{      
        return num1+num2+(num3||0);
}
const sum:number=add(2,3);
console.log(sum);


//default parameter

function studentDetail(name:string,rollno:number,college:string="BIT"):string{
    return name+" my roll number is "+rollno+" from "+college;
}
const studentinfo:string=studentDetail("sowmiya",258);
console.log(studentinfo);



//arrow functions  with defualt parameter

let loginUser=(name:string,email:string,isPaid:boolean=false):void=>{

}

loginUser("sowmi","sowmi@gmail.com");



export{}


//type Alise

type Id=number|string;
let userid:Id;
userid="201EC258";
userid=58;


// implementing object using function 

type employeeDetails={
    name:string;
    role:string;
    experience:number;
}

const assignValues:employeeDetails={
    name:"Sowmiya",
    role:"developer",
    experience:4
}

function printDetails(assignValues:employeeDetails):void{
    console.log(assignValues.experience);
}

printDetails(assignValues);