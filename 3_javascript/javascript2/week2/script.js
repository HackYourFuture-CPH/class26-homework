console.log("hello world !!")


//1.1. Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

const doubleOfOddNumber = numbers.filter(newNumbers => (newNumbers % 2 !== 0)).map(newNumbers => newNumbers * 2)

console.log(doubleOfOddNumber);

console.log("The doubled numbers are", newNumbers); // [2, 6]


// Codewars links:
// 8 kyu To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
// 8 kyu Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript


