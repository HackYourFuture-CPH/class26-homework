const args = require("minimist")(process.argv.slice(2));

console.log(args.a);
console.log(args.b);
console.log(args.c);

const Number1 = args.a;
const Number2 = args.b;
const Number3 = args.c;

let result = (Number1 + Number2 + Number3) / 3;

console.log(result);
