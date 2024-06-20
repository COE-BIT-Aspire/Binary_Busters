// classes:
       //-->it is a blueprint 
       //->which has members and methods 
       //--> structure and behaviour of object 
//object 
        //instance of class
        //-->objects are created based on the structure of the class
        //-->without creating a object class has no value 


//constructor
    //--> called automatically when object is creted
    // uses --> to initialize the members constructor is used




    class Car{
        color:string;
        brand:string;

        constructor(color:string,brand:string){
            this.color=color;
            this.brand=brand;
        }

        start():void{
            console.log(`the ${this.color} ${this.brand} car starts`);
        }
        stop():void{
            console.log(`The ${this.color} ${this.brand} car stops.`);
        }

    };
    const myCar = new Car("black","Honda");
    const yourCar = new Car("red","BMW");
    myCar.color="blue"; //access the data in the class
    myCar.start();  
    yourCar.stop(); 



//modifiers [public,private,protected]

//default modifers in class  --> all public 

// public --> we can access any where 

// private --> we can access within the class


//public

// Members are access from anywhere


class UserInfo{

    name:string;
    rollNo:string;
    department:string;

    constructor(name:string,rollno:string,department:string){
        this.name=name;
        this.rollNo=rollno;
        this.department=department;
    }

    getinfo():void{
        console.log('${name}${rollNo}${department}');
    }
}

const studentinfo=new UserInfo("Sowmiya","201EC258","CCE");
studentinfo.department ="ECE";
console.log(studentinfo);


//private:

//members are not access outside the class

class BankAccount{

    //private


    private acountNumber:string;
    private balance:number;

    constructor(acnumber:string,balance:number){
        this.acountNumber=acnumber;
        this.balance=balance;
    }

    //public 

    checkbalance():number{
        return this.balance
    }
    withdraw(value:number):void{
        this.balance=this.balance - value;
    }
    deposit(value:number):void{
        this.balance=this.balance + value;
    }

};

const account = new BankAccount("12345678",7000);
account.deposit(500);
console.log(account.checkbalance());


// using getter and setter we can access the private data


class employeeDetails{
    private name:string;
    private employeeid:string;

    constructor(name:string,id:string){
        this.name=name;
        this.employeeid=id;
    }

    getdetails():void{
        console.log(`${this.name} ${this.employeeid}`);
    }

    //setters

    //no return type for setter

    setname(name:string){
        this.name=name;
    }
    setid(id:string){
        this.employeeid=id;
    }

    //getter

    getname(name:string):string{
        return this.name;
    }
    getid(id:string):string{
        return this.employeeid;
    }
};

const studentDetails = new employeeDetails("sowmiya","12345");
console.log(studentDetails);
studentDetails.setname("sowmi");
console.log(studentDetails);



//protected

// with in the class and extended class we can access the varaiable 


class Details{
    protected name:string;  
    constructor(name:string){
        this.name=name;
    }
    start():void{
        console.log("this is details class");
    }
}

class derived extends Details{
    private rollno:number;
    constructor(name:string,rollno:number){
        super(name);
        this.rollno = rollno;
    }
    viewDetails():void{
        console.log(`${this.name} ${this.rollno}`);
    }
}

const out = new derived("sowmiya",258);
out.start();
out.viewDetails();













export{}












