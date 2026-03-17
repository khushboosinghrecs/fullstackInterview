let person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log(person.greet()); // "Hello, my name is John and I am 30 years old."
console.log(car); // { make: 'Toyota', model: 'Camry', year: 2020 }

// Objects can also have nested objects
let company = {
  name: "Tech Co",
  employees: {
    manager: "Alice",
    developer: "Bob",
  },
};

console.log(company.employees.manager); // "Alice"
console.log(company.employees.developer); // "Bob"

// Objects can be created using Object.create()
let animal = Object.create(null);
animal.type = "Mammal";
console.log(animal.type); // "Mammal"

Object.keys(person); // ["name", "age", "greet"]
Object.values(person); // ["John", 30, ƒ]
Object.entries(person); // [["name", "John"], ["age", 30], ["greet", ƒ]]
