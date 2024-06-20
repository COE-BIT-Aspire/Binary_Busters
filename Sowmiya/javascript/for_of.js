//for of using map


let employee = new Map();

employee.set("sowmiya",21);
employee.set("akvila",13);
employee.set("sushmeetha",18);


function elegible(details){
    for(let [key,value] of details){
        if(value >= 18){
            console.log(key+" is eligible to vote....");
        }else{
            console.log(key+" is not eligible to vote....");
        }
    }

}
elegible(employee);



//for of using set 

let number = new Set();

number.add(1);
number.add(true);
number.add(1);
number.add("swomiya");

for(let value of number){
    console.log(value);
}


