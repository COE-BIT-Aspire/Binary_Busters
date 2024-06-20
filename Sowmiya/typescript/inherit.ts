

// inheritance and protected 

//oneclass inherit the properties of other class 

//using extend



class Vehicle {
    protected brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(`${this.brand} vehicle starts.`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    drive(): void {
        console.log(`Driving a ${this.model} car.`);
    }
}

class Bike extends Vehicle {
    private type: string;

    constructor(brand: string, type: string) {
        super(brand);
        this.type = type;
    }

    ride(): void {
        console.log(`Riding a ${this.type} bike.`);
    }
}


const myBike = new Bike("Giant", "Mountain");
myBike.start();
myBike.ride();  


// types of inheritance 

// single inheritance
// multilevel inheritance 




// multiple inheritance 
// hirarchical inheritance
//complexity and confusion 

//TypeScript supports only single inheritance and multilevel inheritance. 
//It doesn't support multiple and hybrid inheritance.



//single inheritance

//derived class can inherit only one class


class Vehile{
    protected brand:string;

    constructor(brand:string){
        this.brand=brand;
    }
    start(): void {
        console.log(`${this.brand} starts.`);
    }
}


class newcar extends Vehicle {
    constructor(brand: string) {
        super(brand);
    }

    drive(): void {
        console.log(`${this.brand} is driving.`);
    }
}


const myCar = new newcar("Toyota");

myCar.start(); 
myCar.drive();



//multilevel inheritance 

//creating a chain of inheritance



class Person{
    protected name:string;
    
    constructor(name:string){
        this.name = name;
    }
    introduce():void{
        console.log(`My name is ${this.name}.`); 
    }
}

class Student extends Person{

    protected rollno:string;

    constructor(name:string,rollno:string){
        super(name);
        this.rollno=rollno;
    }
    study():void{
        console.log(`${this.name} with roll number ${this.rollno} is studying.`);
    }
}

class CollegeStudent extends Student{
    protected major: string;
    constructor(name: string, rollNumber: string, major: string) {
        super(name, rollNumber);
        this.major = major;
    }
    stop():void{
        console.log("end....");
    }

}

const myCollegeStudent = new CollegeStudent("sowmiya", "201EC123", "ECE");
myCollegeStudent.introduce();       
myCollegeStudent.study();           
myCollegeStudent.stop();






