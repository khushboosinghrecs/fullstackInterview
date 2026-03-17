let integer = 23;
let float = 23.45;
let exponential = 2.35;
let hex = 0xff;
let binary = 0b1010;
let octal = 0o755;
let bigInt = 1234567890n;

let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(3.14)); // false
console.log(Number.isInteger("42")); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isNaN(NaN)); // true

console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(100)); // true
