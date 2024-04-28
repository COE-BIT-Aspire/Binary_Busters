
//example:1  --> objecst and array 


interface person{
    name : string,
    age: number
}

function getEligibleVoters(people:person[],Votingage:number):string[]{
    let eligibleVoters: string[] = [];
    
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        
        if (person.age >= Votingage) {
            eligibleVoters.push(person.name);
        }
    }

    return eligibleVoters;

}

const people :person[]=[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 20 }
];

const Votingage:number = 18;
const eligibleVoters:string[]=getEligibleVoters(people,Votingage);
console.log(eligibleVoters)

//example :2 

interface student{
    name : string,
    grade:number 
}

function getstudensWithHigherMarks(studentDetails:student[],mark:number):string[]{
    const studentsWithHigherGrade: string[] = [];
    for (let student of studentDetails) {
        if (student.grade >=90 ) {
            studentsWithHigherGrade.push(student.name);
        }
    }
    return studentsWithHigherGrade;
}


const studentDetails : student[]=[
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 0 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 0 }
];

const mark:number = 90;
const studensWithHigherMarks:string[] = getstudensWithHigherMarks(studentDetails,mark);
console.log(studensWithHigherMarks);



//example : 3

//map --> set 
// key value pair 


const itemPrices:Map<string,number>=new Map();

itemPrices.set("T-shirt", 15.99);
itemPrices.set("Jeans", 29.99);
itemPrices.set("Sneakers", 49.99);

function getPrice(itemName: string):number{
    return itemPrices.get(itemName);
}

const itemName:string = "Sneakers";
const itemPrice:number= getPrice(itemName);
console.log(itemPrice);




//example:4

//set --> add -> add data 
// --> has --> true or fale 


const likedBy: Set<string> = new Set();

function likePost(userId: string): void {
    likedBy.add(userId);
}

function hasLikedPost(userId: string): boolean {
    return likedBy.has(userId);
}

likePost("user123");
likePost("user456");
likePost("user123");

console.log(`User with ID user123 has liked the post: ${hasLikedPost("user123")}`);
console.log(`User with ID user789 has liked the post: ${hasLikedPost("user789")}`);




