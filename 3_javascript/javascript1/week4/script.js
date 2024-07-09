let userName = "";
const todos = [];

function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    userName = command.replace("Hello my name is ", "");
    return `Nice to meet you ${userName}.`;
  } else if (command === "What is my name?") {
    if (userName) {
      return `Your name is ${userName}`;
    } else {
      return "What is your name?";
    }
  } else if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const todoItem = command.replace("Add ", "").replace(" to my todo", "");
    todos.push(todoItem);
    return `${todoItem} added to your todo.`;
  } else if (
    command.startsWith("Remove ") &&
    command.endsWith(" from my todo")
  ) {
    const todoItem = command
      .replace("Remove ", "")
      .replace(" from my todo", "");
    const index = todos.indexOf(todoItem);
    if (index !== -1) {
      todos.splice(index, 1);
      return `Removed ${todoItem} from your todo.`;
    } else {
      return `${todoItem} is not in your todo list.`;
    }
  } else if (command === "What is on my todo?") {
    if (todos.length > 0) {
      return `You have ${todos.length} todos: ${todos.join(" and ")}`;
    } else {
      return "You have no todos.";
    }
  } else if (command === "What day is it today?") {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    return `${day} of ${month} ${year}`;
  } else if (/what is \d+ [+*\/-] \d+/.test(command)) {
    const result = eval(command.replace("what is ", ""));
    return result;
  } else if (command.startsWith("Set a timer for ")) {
    const timeStr = command.replace("Set a timer for ", "");
    const timeInMinutes = parseInt(timeStr, 10);
    if (!isNaN(timeInMinutes)) {
      setTimeout(() => {
        console.log("Timer done");
      }, timeInMinutes * 60 * 1000);
      return `Timer set for ${timeInMinutes} minutes.`;
    } else {
      return "Invalid timer format.";
    }
  } else {
    return "Command not recognized.";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("What day is it today?"));
