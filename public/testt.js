let array = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 }
];

let double = array.map((item) => item.age * 2);
let joined = double.join(" | ");
console.log(joined);