let arrayOfFunctions = [function1, function2, function3];

function function1() {
  console.log("1");
}
function function2() {
  console.log("2");
}
function function3() {
  console.log("3");
}

arrayOfFunctions.forEach((functions) => functions());

//2

const functionA = () => {
  console.log("A");
};

function functionB() {
  console.log("B");
}

functionA();
functionB();

//3

const object = {
    functionInObject: () => {
      console.log("is working");
    }
  };
  object.functionInObject();
  