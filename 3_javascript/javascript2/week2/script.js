console.log("hello world !!")


//1.1. Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

const doubleOfOddNumber = numbers.filter(newNumbers => (newNumbers % 2 !== 0)).map(newNumbers => newNumbers * 2)

console.log(doubleOfOddNumber);

console.log("The doubled numbers are", newNumbers); // [2, 6]


