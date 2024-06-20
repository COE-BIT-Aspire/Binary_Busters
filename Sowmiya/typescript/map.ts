//ES6 ---> Map Introduce 


// Map ---> key value pairs
// key ---> always unique 
// Keys and values can be of any data type.

//set --> setting the value 
//get --> getting the values
//has --> checking (true or false)
//foreach-->iterate


//syntax:

// let myMap = new Map<string,number>();

//Methods

// --> set 
// --> get 
// --> has
// --> size
// --> clear
// --> delete
// --> forEach  (value,key)=>{};

//set


let myMap = new Map<string,number>();
myMap.set("sowmiya",21);
myMap.set("Kavila",20);
myMap.set("sushmeetha",22);

console.log(myMap);


//get ---> retrive data 

console.log(myMap.get("sowmiya"));

const age=myMap.get("sowmiya");
console.log(age);


// has --> checking  --> return true or false

console.log(myMap.has("sowmiya"));


//size

console.log(myMap.size);


//delete 

myMap.delete("sowmiya");
console.log(myMap.has("sowmiya"));

//clear

myMap.clear();

console.log(myMap);


// forEach  -->   problem --> print the name who has age 21


const stdentDeatils = new Map<string,number>();


//setting the values

stdentDeatils.set("sowmi",21);
stdentDeatils.set("kavii",20);
stdentDeatils.set("sush",21);
stdentDeatils.set("Abi",22);

stdentDeatils.forEach((value,key)=>{
   if(value===21){
    console.log(key);
   }
});




// example using --> map,function,forEach



let employee = new Map<number,boolean>();
employee.set(101,true);
employee.set(102,true);
employee.set(103,false);

console.log(employee.get(101));



function correctdetails(emp):void{
    emp.forEach((value,key)=>{
        if(value === false){
            emp.delete(key);
        }
    })
}
correctdetails(employee);
console.log("Today's present Employee:")
console.log(employee);























