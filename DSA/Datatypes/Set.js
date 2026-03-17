let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added

console.log(set.has(1)); // true
console.log(set.has(3)); // false

set.delete(2);
console.log(set.has(2)); // false

console.log(set.size); // 1

set.clear();
console.log(set.size); // 0

let set2 = new Set([1, 2, 3]);
console.log(set2); // Set { 1, 2, 3 }

for (let value of set2) {
  console.log(value); // 1, then 2, then 3
}
