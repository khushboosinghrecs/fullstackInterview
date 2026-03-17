let empty = null;
console.log(typeof empty); // "object"
console.log(empty === null); // true
console.log(empty == undefined); // true

// Null is often used to represent the intentional absence of any object value

let person = {
  name: "Alice",
  age: 30,
  address: null, // No address provided
};

console.log(person.address); // null

// Null can also be used to reset a variable
let data = "Some data";
console.log(data); // "Some data"
data = null;
console.log(data); // null
