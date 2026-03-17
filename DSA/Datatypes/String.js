let single = "hello";
let double = "  world";
let backtick = `Template ${single}`;

let str = "Hello, World!";

console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.includes("Word")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.indexOf("o")); // 4
console.log(str.slice(0, 5)); // "Hello"
console.log(str.split(",")); // ["Hello", " World!"]
console.log(str.trim()); // "Hello, World!"
console.log(str.repeat(2)); // "Hello, World!Hello, World!"
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

console.log(str);
console.log(str.charAt(0)); // "H"
console.log(str.slice(3, 9)); // "lo, "
