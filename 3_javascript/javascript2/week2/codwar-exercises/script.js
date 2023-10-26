//1.1. Doubling of number
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

const doubledOddNumbers = numbers
  .filter((item) => item % 2 !== 0)
  .map((item) => item * 2);

console.log(doubledOddNumbers); // [2, 6]

//Find the Square Root
const squareRoot = (x) => +(x ** 0.5).toFixed(5);

//Remove All The Marked Elements of a List
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((x) => values_list.indexOf(x) == -1);
};
