let userName = [];
const toDoList = [];
let timer;

function getReply(command) {
    if (command.includes("Hello my name is")) {
        const name = command.split("Hello my name is ")[1];

        if (userName.includes(name)) {
            return "You have already said that!";
        }

        userName.push(name);

        return `Nice to meet you ${name}`;
    }

    if (command === "what is my name") {
        return `Your name is ${userName[0] || 'unknown'}`;
    }

    return "I'm sorry, I don't understand that command.";
}

// Making a todo list and saving the values in the array toDoList
if (command.endsWith("to my todo")) {
    const item = command.split("to my todo")[1];
    if (item) {
        toDoList.push(item);
        return `${item} added to your todo list`;
    } else {
        return "Invalid command. Please use the format 'Add [activity] to my todo";
    }
}    


//Remove items from my toDoList
if (command.startsWith("remove")) {
const removeItem = command.split("remove")[1];
toDoList.splice(removeItem);
return `Removed ${removeItem} from your todo list`;
}


// what is on my todo
if (command.includes("what is on my todo?")) {
    const activities = toDoList.length;
    if (activities > 0) {
        return `you have ${activities.join(", ")} items on your todo list`;
    } else {
    return `You have nothing to do today`;
}
}

// What date is it today
if (command === "What day is it today?") {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }

// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
function calculate(num1, num2, command) {
    if (command.includes("add")) {
        let add = num1 + num2;
        return add;
    } else if (command.includes("multiply")) {
        let multiply = num1 * num2;
        return multiply;
    } else {
        return "Operation not supported";
    }
}

let result = calculate(3, 3, "add");
let result1 = calculate(4, 12, "multiply");
let result2 = calculate(9, 3, "Nothing");

console.log(`Result 1: ${result}`);
console.log(`Result 2: ${result1}`);
console.log(`Result 3: ${result2}`);


// Set a timer for 4 minutes
if (command.startsWith("Set a timer for ")) {
    const timeInMinutes = parseInt(command.match(/\d+/)[0]);
    if (!isNaN(timeInMinutes)) {
      const timeInMillis = timeInMinutes * 60 * 1000;
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("Timer done");
      }, timeInMillis);
      return `Timer set for ${timeInMinutes} minutes`;
    } else {
      return "Invalid timer format. Please specify the time in minutes.";
    }
  }


// console.log(getReply("Hello my name is Benjamin")); // Output: "Nice to meet you Benjamin"
// console.log(getReply("What is my name?")); // Output: "I'm sorry, I don't understand that command."
// console.log(getReply("Hello my name is Ben")); // Output: "Nice to meet you Ben"
// console.log(getReply("Hello my name is Benjamin")); // Output: "You have already said that!"
// console.log(aboutMe); // Output: ["Benjamin, Ben"]
// console.log(toDoList("fishing")); //fishing added to your todo
// console.log(toDoList("singing in the shower")); //singing in the shower added to your todo
// console.log(aboutMe); // Output: ['Benjamin', 'Ben', 'fishing', 'swimming']
// console.log(activityToRemove("fishing")); // [removed fishing from your todo list]
// viewToDo(); //It only shows one output- "singing in the shower" as I had deleted the first activity in the previous task.
// console.log(`Today is ${day}. of ${month} ${year}`); //It works without a function. DO I still have to create a function?
// console.log (`Your answer is ${result}`);
// console.log (`Your answer is ${result1}`);
// console.log (`${result2}`);