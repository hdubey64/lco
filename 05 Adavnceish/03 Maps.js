var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");
console.log(myMap);

for (let key of myMap.keys()) {
   console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {
   console.log(`Value is ${value}`);
}

for (let [key, value] of myMap) {
   console.log(`Key is: ${key} and Value is: ${value}`);
}

myMap.forEach((value) => console.log(`${value}`));

myMap.forEach((v, k) => console.log(`${v} and key is: ${k}`));

myMap.delete(2);
console.log(myMap);

let obj = [
   {
      name: "Vishal",
      age: 26,
   },
   {
      name: "gfhfgh",
      age: 26,
   },
];

const [item, item2] = obj;

console.log(item, item2);

const temp = { ...obj[0], course: "c++" };
console.log(temp);

obj[0] = temp;
console.log(obj);
