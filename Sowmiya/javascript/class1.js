// classes intoduced in es6 

// class is a template for object 

class ClassName{
    constructor(name,age){  //initialize the value 
        this.name = name;
        this.age = age;
    }
}

const person_1 = new ClassName("sowmiya",21);

const person_2= new ClassName("kavila",20);

console.log(person_1.name);

console.log(person_2.name);


// Methods 


// js can have any number of methods 



class Person{
    constructor(name,age){  //initialize the value 
        this.name = name;
        this.age = age;
    }

    greet(){  // methods 
        return "hai "+this.name;
    }

    changename(newname){  //method
        this.name = newname ;
    }
}


const std_2= new Person("sushmeethaa",19);

console.log(std_2.greet());

std_2.changename("sowmi")

console.log(std_2.name);



// setter and getter

// using this we can access the propertya nd methods 

// get and set are the keywords


// getter method --> used to access the property or method 



class Person1{
    constructor(name,age){  //initialize the value 
        this.name = name;
        this.age = age;
    }

    get greet(){  // getter methods 
        return "hai "+this.name;
    }

    changename(newname){  //method
        this.name = newname ;
    }
}
const std_3 = new Person1("sowmiyaviswanathan",21);

console.log(std_3.greet); // not console.log(std_3.greet());


// setter method 

// to seet the value of the property  / update the value 

class Person2{
    constructor(name,age){  //initialize the value 
        this.name = name;
        this.age = age;
    }

    set changename(newname){  //method
        this.name = newname ;
    }
}

const std_4 = new Person2();

std_4.changename = "sowmiya V";

console.log(std_4.name);



//getter and setter 


class Person3{
    constructor(name,age){  //initialize the value 
        this.name = name;
        this.age = age;
    }

    set changename(newname){  //setter method
        this.name = newname ;
    }

    get personname(){   // getter method 
        return this.name;
    }
}

const std_5 = new Person3("ammu",23);

console.log(std_5.personname);

std_5.changename = "amir";

console.log(std_5.personname);




// class expression 

// alternative way to define the new class 

//class expression mean class do not ahve a name that store in a varaible using this varaible we can create teh object 


let person=class {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}


const person_7 = new person("sowmi v");

console.log(person_7.getName())




// javascript inheritence 

// inheritance uses extend keyword 

// which uses the property and methods of other class is called inheritance 



class person5{
    constructor(name){
        this.name = name;
    }

    greet(){
        return this.name;
    }
}

class Student extends person5{

}

const stdudent_1 = new Student("sowmiya");

console.log(stdudent_1.greet());



// jaavscript super Mthod 

// super() --> called the parent class



class person6{
    constructor(name){
        this.name = name;
    }

    greet(){
        return this.name;
    }
}

class Student1 extends person6{
    constructor(name,age){
        super(name);  // parent class 
        this.age = age;
    }

    getAge(){
        return this.age;
    }

}


const stdudent_2 = new Student1("sowmiya",21);

console.log(stdudent_2.getAge(),stdudent_2.name);



//method or property overridding / shadowing method 



// when ever we are having the same method name and same property name for both parent and child class , in this case if we call the child method parent method  will override the the parent method this  is called method over ridding 



//example 

class person7{
    constructor(name){
        this.name = name;
    }

    greet(){
        return "hello "+this.name;
    }
}

class Student2 extends person7{
    constructor(name,age){
        super(name);  // parent class 
        this.age = age;
    }

    greet(){
        return "hello "+this.name + " you are "+this.age+" now";
    }

    getAge(){
        return this.age;
    }

}

const stdudent_3 = new Student2("sowmiya",21);

console.log(stdudent_3.greet());



// javascript static methods



class person8{
    constructor(name){
        this.name = name;
    }

    static greet(x){  // static method 
        return "hello "+x.name;
    }
}


const per_1 = new person8("sowmiya");

// per_1.greet();  // error we cannot call the static method using the object 

// using class name we can call the static method 

// console.log(person8.greet()); output:hello person8


console.log(person8.greet(per_1));


// javascript priavte methods 


// private methods are accessable only within the class

// we cannot call methods outside 

// for private --> # use this 



class Person10{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    #fullname(){  // private method 
        return this.firstname+this.lastname;
    }

    get name(){  //getter
        return this.#fullname();
    }
}

const per_2 = new Person10("sowmi","viswan");

console.log(per_2.name);

