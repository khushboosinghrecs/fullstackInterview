let mapEx = new Map();
mapEx.set("key1", "value1");
mapEx.set("key2", "value2");

mapEx.get("key1"); // "value1"
mapEx.has("key2"); // true
mapEx.delete("key1");
mapEx.has("key1"); // false

console.log(mapEx.size); // 1

mapEx.clear();
console.log(mapEx.size); // 0

let map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map2); // Map { 'a' => 1, 'b' => 2 }

for (let [key, value] of map2) {
  console.log(key, value); // "a" 1, then "b" 2
}

for (let key of map2.keys()) {
  console.log(key); // "a", then "b"
}

for (let value of map2.values()) {
  console.log(value); // 1, then 2
}

for (let entry of map2.entries()) {
  console.log(entry); // ["a", 1], then ["b", 2]
}
