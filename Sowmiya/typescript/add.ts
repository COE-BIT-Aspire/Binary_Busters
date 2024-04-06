let age: number = 25;
console.log(age);


let isStudent: boolean = true;
console.log(isStudent);


let name: string = "John";
console.log(name);


function greet(): void {
    console.log("Hello!");
}
greet();


let variable: any = "Hello";
console.log(variable);
variable = 10;
console.log(variable);



let nullableValue: null = null;
console.log(nullableValue);



let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);


let x: undefined;
console.log(x);


enum Gender {
    Male,
    Female
}


let gender: Gender = Gender.Male;
console.log(gender);


class Person {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet();


let mixedArray: Array<number | string | boolean> = [1, "two", true];
console.log(mixedArray);


let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);


let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits);


let person: [string, number] = ["John", 30];
console.log(person);


let uniqueNumbers = new Set<number>();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
console.log(uniqueNumbers);



let ages = new Map<string, number>();
ages.set("John", 30);
ages.set("Jane", 25);
console.log(ages);



let personObj = {
    name: "John",
    age: 30,
    gender: "male"
};
console.log(personObj);



class Car {
    public model: string;
    public color: string;
    public isElectric: boolean;
  
    constructor(model: string, color: string, isElectric: boolean) {
      this.model = model;
      this.color = color;
      this.isElectric = isElectric;
    }
  
    public drive(): void {
      const engineStarted: boolean = this.startEngine();
      console.log(engineStarted);
    }
  
    private startEngine(): boolean {
      return true;
    }
  }

  const car = new Car("BMW","Blue",true);

