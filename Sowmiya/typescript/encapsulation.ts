

//Data hiding  ---> Encapsulation 

// modifier
    //  -->public ,private,protected

//hiding our data from outside world 



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




export{}