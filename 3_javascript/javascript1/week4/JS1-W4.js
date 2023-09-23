
let userName = "";
const todoList = []; 
let timer;

function getReply(command) {
    if (command.startsWith("Hello my name is ")) {
        const newName = command.replace("Hello my name is ", "");
        if (userName) {
            return `We already know each other. Hi again ${userName}.`;
        } else {
            userName = newName;
            return `Nice to meet you ${userName}`;
        }
    } else if (command === "What is my name?") {
        return userName ? `Your name is ${userName}` : "Your name is not set.";}

    if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
        const task = command.replace("Add ", "").replace(" to my todo", "");
        todoList.push(task); 
        return `${task} added to your todo.`;
    } else if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
        const task = command.replace("Remove ", "").replace(" from my todo", "");
        const index = todoList.indexOf(task); 
        if (index !== -1) {
            todoList.splice(index, 1); 
            return `Removed ${task} from your todo.`;
        } else {
            return `${task} is not in your todo list.`;
        }
    } else if (command === "What is on my todo?") {
        if (todoList.length === 0) {
            return "You have no todos.";
        } else {
            const todoItems = todoList.join(", ");
            return `You have ${todoList.length} todos - ${todoItems}`;
        }}

    if (command.match ("What day is it today?")){
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return today.toLocaleDateString(undefined, options);
    } 
    
    if (command.startsWith('What is ')) {
        const expression = command.substring(8); 
        try {
            const result = eval(expression);
            return `The result is ${result}`;
        } catch (error) {
            return 'I cannot perform that calculation.';}
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
          return "Invalid timer format. Please specify the time in minutes.";}
      } 
      
    else {return 'I do not understand that command.';}
}


console.log(getReply("Hello my name is Benjamin")); //Nice to meet you Benjamin! 
console.log(getReply("Hello my name is Benjamin")); //TWe already know each other. Hi again Benjamin.


console.log(getReply("What is my name?")); // Your name is Benjamin

console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // singing added to your todo
console.log(getReply("Remove fishing from my todo")); // Removed fishing from your todo
console.log(getReply("What is on my todo?")); // You have 1 todos: singing

console.log(getReply("What day is it today?")); // September 21, 2023

console.log(getReply('What is 3 + 3')); // The result is 6

console.log(getReply('Set a timer for 4 minutes')); // Timer set for 4 minutes ///// Timer done

console.log(getReply('hooo haa hhhaa hoo')); // I do not understand that command.


