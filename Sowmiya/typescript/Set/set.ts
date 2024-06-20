// set --> distinct --> no duplicate values are allowd 
// same like map --> but only has key not key value pair 


//Methods

// --> add
// --> has
// --> delete
// --> size 
// --> clear
// --> forEach



//add --> add entires


let studentEnteries = new Set<string>();
studentEnteries.add("sowmiya");
studentEnteries.add("sowmiya");
studentEnteries.add("kavila");
console.log(studentEnteries);


//has  --> true or false 

console.log(studentEnteries.has("bala"));


// size 
console.log(studentEnteries.size);


//delete 

console.log(studentEnteries.delete("sowmiya"));


//forEach 

studentEnteries.forEach(value=>{
    console.log(value);
})

