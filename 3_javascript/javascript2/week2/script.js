//1.1. Doubling of number

let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log("The doubled numbers are", newNumbers); 

// 1.2. codewars! part 1
function processArray(arr) {
    return arr.map(number => {
      
      const sqrt = Math.sqrt(number);
      if (Number.isInteger(sqrt)) {
        return sqrt;
      } else {
        return number * number;
      }
    });
  }
  
  const inputArray = [4, 3, 9, 7, 2, 1];
  const resultArray = processArray(inputArray);
  console.log(resultArray); 

// 1.2. codewars! part 2

function removeEverySecondElement(arr) {
    
    const result = [];
  
    
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]); 
    }
  
    return result;
  }
  
  const inputArray1 = ["Keep", "Remove", "Keep", "Remove", "Keep"];
  const resultArray1 = removeEverySecondElement(inputArray);
  console.log(resultArray1); 
  

  
