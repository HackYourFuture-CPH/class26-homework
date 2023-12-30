const args = require("minimist")(process.argv.slice(2));

console.log(args.a);
console.log(args.b);
console.log(args.c);

const Number1 = args.a;
const Number2 = args.b;
const Number3 = args.c;

if (Number1.trim() === "" || Number2.trim() === "" || Number3.trim() === "") {
  console.log("Please check the empty spaces");
} else {
  if (
    !isNaN(Number(Number1)) &&
    !isNaN(Number(Number2)) &&
    !isNaN(Number(Number3))
  ) {
    let result = (Number(Number1) + Number(Number2) + Number(Number3)) / 3;
    console.log(result);
  } else {
    console.log("Invalid argument");
  }
}
