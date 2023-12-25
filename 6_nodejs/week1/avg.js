
const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    return sum / numbers.length;
  };
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('No numbers provided. Please provide numbers as command line arguments.');
  } else {
    const numbers = args.map(Number);
  
    if (numbers.some(isNaN)) {
      console.log('Invalid input. Please provide valid numbers as command line arguments.');
    } else {
      const average = calculateAverage(numbers);
      console.log('Average:', average);
    }
  };
  