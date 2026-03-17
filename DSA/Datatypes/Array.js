let arr1 = [1, 2, 3];
let arr6 = new Array(5); // Creates an array of length 5 with empty slots
console.log(arr6); // [ <5 empty items> ]
let arr2 = new Array(4, 5, 6);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]

console.log(arr1.length); // 3
console.log(arr2.length); // 3

arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

arr2.pop();
console.log(arr2); // [4, 5]

console.log(Array.isArray(arr1)); // true
console.log(Array.isArray({})); // false

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(1, 4)); // [2, 3, 4]
console.log(arr3.splice(1, 2)); // [2, 3]
console.log(arr3); // [1, 4, 5]
console.log(arr3.splice(2, 1)); // [4]
console.log(arr3.splice(2, 1, 9)); // [4]

console.log(arr3); // [1, 2, 9, 5]
arr3.unshift(0);
console.log(arr3); // [0, 1, 2, 9, 5]
arr3.shift();
console.log(arr3); // [1, 2, 9, 5]

let arr4 = [10, 20, 30];
console.log(arr4.indexOf(20)); // 1
console.log(arr4.includes(30)); // true
