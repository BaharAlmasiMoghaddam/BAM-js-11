// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const obj1 = { number1: 6043, age1: 21, pt1: 96 };

//1st:
const valuesArray1 = Object.values(obj1);
console.log(valuesArray1);

//2nd:

const valuesArray2 = [];
for (let key in obj1) {
  valuesArray2.push(obj1[key]);
}

console.log(valuesArray2);
