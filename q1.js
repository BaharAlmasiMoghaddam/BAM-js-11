// ? 1. Convert the code below using obj destructuring to get a best practice code:

const obj = { number: 6043, age: 21, pt: 96 };
const number = obj.number;
const age = obj.age;
const pt = obj.pt;
console.log(number, age, pt);

// ! Answer:
const obj1 = { number1: 6043, age1: 21, pt1: 96 };

const { number1, age1, pt1 } = obj1;

console.log(number1, age1, pt1);
96;
