let userName = "";
const todoList = [];
let timer;

function getReply(command) {
  if (command.startsWith("Hello my name is ")) {
    const name = command.substring(17);
    userName = name;
    return `Nice to meet you ${userName}`;
  }
  if (command === "What is my name?") {
    return `Your name is ${userName}`;
  }
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const todoItem = command.substring(4, command.length - 11);
    todoList.push(todoItem);
    return `${todoItem} added to your todo`;
  }
  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const todoItem = command.substring(7, command.length - 11);
    const index = todoList.indexOf(todoItem);
    if (index !== -1) {
      todoList.splice(index, 1);
      return `Removed ${todoItem} from your todo`;
    } else {
      return `${todoItem} is not in your todo list`;
    }
  }
  if (command === "What is on my todo?") {
    const numTodos = todoList.length;
    if (numTodos === 0) {
      return "You have no todos.";
    } else {
      const todoItems = todoList.join(" and ");
      return `You have ${numTodos} todos - ${todoItems}`;
    }
  }
  if (command === "What day is it today?") {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
  if (command.startsWith("What is ") && command.endsWith("?")) {
    try {
      const expression = command.substring(8, command.length - 1);
      const result = eval(expression);
      return `${result}`;
    } catch (error) {
      return "Sorry,I cannot evaluate that expression.";
    }
  }
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
  if (command === "What time is it?") {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return `The current time is ${hours}:${minutes}`;
  } else if (command.startsWith("Remind me to ")) {
    const reminderText = command.substring(13);
    return `I will remind you to ${reminderText}`;
  } else {
    return "I do not understand that command.";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3?"));
console.log(getReply("Set a timer for 4 minutes?"));
console.log(getReply("What time is it?"));
