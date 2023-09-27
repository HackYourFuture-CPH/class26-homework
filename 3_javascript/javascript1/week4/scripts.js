// Global variables to store user data
let userName = '';
const todoList = [];
let timer;

function getReply(command) {
  if (command.startsWith('Hello my name is ')) {
    const name = command.replace('Hello my name is ', '');
    userName = name;
    return `Nice to meet you ${userName}`;
  } else if (command === 'What is my name') {
    if (userName) {
      return `Your name is ${userName}`;
    } else {
      return "I don't know your name yet.";
    }
  } else if (command.startsWith('Add ')) {
    if (command.includes('to my todo')) {
      const todoItem = command.replace('Add ', '').replace(' to my todo', '');
      todoList.push(todoItem);
      return `${todoItem} added to your todo`;
    }
  } else if (command.startsWith('Remove ')) {
    if (command.includes('from my todo')) {
      const todoItem = command
        .replace('Remove ', '')
        .replace(' from my todo', '');
      const index = todoList.indexOf(todoItem);
      if (index !== -1) {
        todoList.splice(index, 1);
        return `Removed ${todoItem} from your todo`;
      } else {
        return `${todoItem} was not found in your todo list`;
      }
    }
  } else if (command === 'What is on my todo?') {
    if (todoList.length === 0) {
      return 'Your todo list is empty';
    } else {
      const todoItems = todoList.join(' and ');
      const plural = todoList.length > 1 ? 's' : '';
      return `You have ${todoList.length} todo${plural} - ${todoItems}`;
    }
  } else if (command === 'What day is it today?') {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  } else if (command.includes('Set a timer for')) {
    const time = parseInt(command.match(/\d+/)[0]);
    timer = setTimeout(() => {
      console.log('Timer done');
    }, time * 60000); // Convert minutes to milliseconds
    return `Timer set for ${time} minutes`;
  } else if (command.startsWith('What is ')) {
    const mathExpression = command.replace('What is ', '');
    try {
      const result = eval(mathExpression);
      return result.toString();
    } catch (error) {
      return "Sorry, I couldn't perform the calculation.";
    }
  } else {
    return "I don't understand that command";
  }
}

// Example usage
console.log(getReply('Hello my name is Benjamin')); // "Nice to meet you Benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
console.log(getReply('Add fishing to my todo')); // "fishing added to your todo"
console.log(getReply('What day is it today?')); // "20 of September 2023"
console.log(getReply('Set a timer for 4 minutes')); // "Timer set for 4 minutes" (timer starts)
console.log(getReply('What is 3 + 3')); // "6" (math calculation)
