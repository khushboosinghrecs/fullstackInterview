let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(sym1 === sym2); // false

let sym3 = Symbol.for("shared");
let sym4 = Symbol.for("shared");

console.log(sym3 === sym4); // true

console.log(typeof sym1); // "symbol"
console.log(sym1.toString()); // "Symbol(description)"
console.log(sym1.description); // "description"
