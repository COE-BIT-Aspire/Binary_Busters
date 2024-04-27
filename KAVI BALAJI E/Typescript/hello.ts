interface Person {
    name: string;
    age: number;
    greet(): void;
}

function sayHello(person: Person) {
    console.log(`Hello, ${person.name}!`);
}