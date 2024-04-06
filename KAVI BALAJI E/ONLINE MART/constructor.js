class Employee {
    constructor() {
     
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const emp = new Employee();
emp.name = "KING";
emp.greet();