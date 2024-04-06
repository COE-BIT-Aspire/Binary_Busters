var age = 25;
console.log(age);
var isStudent = true;
console.log(isStudent);
var name = "John";
console.log(name);
function greet() {
    console.log("Hello!");
}
greet();
var variable = "Hello";
console.log(variable);
variable = 10;
console.log(variable);
var nullableValue = null;
console.log(nullableValue);
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var x;
console.log(x);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var gender = Gender.Male;
console.log(gender);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person1 = new Person("Alice", 30);
person1.greet();
var mixedArray = [1, "two", true];
console.log(mixedArray);
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var fruits = ["apple", "banana", "orange"];
console.log(fruits);
var person = ["John", 30];
console.log(person);
var uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
console.log(uniqueNumbers);
var ages = new Map();
ages.set("John", 30);
ages.set("Jane", 25);
console.log(ages);
var personObj = {
    name: "John",
    age: 30,
    gender: "male"
};
console.log(personObj);
