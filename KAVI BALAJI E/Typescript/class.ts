class Employee{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    exp(experience: number): void {
        console.log(`${this.name} worked ${experience} years.`);
    }
}
let kavi = new Employee("Kavi");
kavi.exp(10);
