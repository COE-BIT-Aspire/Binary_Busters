

//TypeScript define the structure that classes or objects 

// define the structure of object using type 

type personType={  //define the structure 
    name:string;
    age:number;
}

const personTypeDetails:personType={
    name:"sowmiya",
    age:21
}

console.log(personTypeDetails);
console.log(personTypeDetails.name);





//define the structure of object using interface 


interface personInterface{  //define the structure 
    name:string;
    age:number
}

const personInterfaceDetails:personInterface={
    name:"sowmi",
    age:21
}
console.log(personInterfaceDetails);
console.log(personInterfaceDetails.name);




// extend or add more members ---> go for interafce 

interface person{
    name:string;
    age:number;
}

interface employee extends person{
    employeeid:string;
}

const employeeDetails:employee={
    name:"sowmiya",
    age:21,
    employeeid:"1234567"
}
console.log(employeeDetails);



// intersection or combining ---> go for type 


type empperson={
    name:string;
    age:number;
}

type finalperson = empperson &{
    empid:string;
}

const finaloutput : finalperson={
    name:"sowmiya",
    age:21,
    empid:"1234567"
}

console.log(finaloutput);




// implementing object using function  [readonly]

type employeeDetails={
    name:string;
    role:string;
    readonly empleid:number;
    experience:number;
}

const assignValues:employeeDetails={
    name:"Sowmiya",
    role:"developer",
    empleid:56,
    experience:4
}

function printDetails(assignValues:employeeDetails):void{
    console.log(assignValues.experience);
}

printDetails(assignValues);



export{}