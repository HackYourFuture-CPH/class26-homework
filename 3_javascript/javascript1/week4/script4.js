// Making a todo list and saving the values in the array toDoList

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
    
    // Making a todo list and saving the values in the array toDoList
    
    if (command.endsWith("to my todo")) {
        const item = command.split("to my todo")[1];
        if (item) {
            toDoList.push(item);
            return `${item} added to your todo list`;
        } else {
            return "Invalid command. Please use the format 'Add [activity] to my todo'";
        }
    }
    
    //Remove items from my toDoList
    
    if (command.startsWith("remove")) {
        const removeItem = command.split("remove")[1];
        if (toDoList.includes(removeItem)) {
            toDoList.splice(toDoList.indexOf(removeItem), 1);
            return `Removed ${removeItem} from your todo list`;
        } else {
            return `${removeItem} is not in your todo list`;
        }
    }

    // what is on my todo

    if (command.includes("what is on my todo?")) {
        if (toDoList.length > 0) {
            return `You have ${toDoList.join(", ")} items on your todo list`;
        } else {
            return "You have nothing to do today";
        }
    }

    // What date is it today

    if (command === "What day is it today?") {
        const today = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        return today.toLocaleDateString("en-US", options);
    }

// // Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
if (command.includes("+")) {
    const [num1, num2] = command.match(/\d+/g).map(Number);
    return num1 + num2;
} else if (command.includes("times")) {
    const [num1, num2] = command.match(/\d+/g).map(Number);
    return num1 * num2;
}

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

    return "I'm sorry, I don't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 4 minutes?"));
console.log(getReply("What time is it?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 6 times 8"));