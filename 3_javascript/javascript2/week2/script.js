// --> Doubling of number
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(elem => elem % 2 !== 0)
    .map(elem => elem * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

