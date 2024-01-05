const args = process.argv.slice(2);

if (!args.length){
    console.log("Please input some numbers!");
    return;
}

const notNumbers = args.filter(arg => isNaN(arg));

if (notNumbers.length){
    console.log("Please input only numbers");
    return;
}

const numbers = args.map(Number);

const total = numbers.reduce((acc, number) => acc + number,0);
const avg = total / numbers.length;

console.log(avg);
