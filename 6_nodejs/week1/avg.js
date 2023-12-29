/* Using array destructuring method through spread syntax, the 3 commas will skip the first 3 elemnts (node, script path and operation) 
from the command line. */

const [, , , ...numbers] = process.argv;
    
  if (numbers.length === 0 || numbers.some(isNaN)) {
    console.error('Error: Please provide valid numbers as command line arguments.');
  } else {
    const average = numbers.reduce((acc, num) => acc + Number(num), 0) / numbers.length;
    console.log('Average:', average);
  }
