const voiceAssistant = {
  name: "",
  todos: [],
  timer: null,
};

function getReply(command) {
  const lowerCommand = command.toLowerCase(); 
  const words = lowerCommand.split(" ");
  const action = words[0];

  if (action === "hello") {
    const name = words.slice(4).join(" ");
    voiceAssistant.name = name;
    return `Nice to meet you ${name}`;
  } else if (action === "what" && words[1] === "is" && words[2] === "my" && words[3] === "name") {
    if (voiceAssistant.name) {
      return `Your name is ${voiceAssistant.name}`;
    } else {
      return "I don't know your name yet.";
    }
  } else if (action === "add" && words[1] === "to" && words[2] === "my" && words[3] === "todo") {
    const todo = words.slice(4).join(" ");
    voiceAssistant.todos.push(todo);
    return `${todo} added to your todo`;
  } else if (action === "remove" && words[1] === "from" && words[2] === "my" && words[3] === "todo") {
    const todoToRemove = words.slice(4).join(" ");
    const index = voiceAssistant.todos.indexOf(todoToRemove);
    if (index !== -1) {
      voiceAssistant.todos.splice(index, 1);
      return `Removed ${todoToRemove} from your todo`;
    } else {
      return `${todoToRemove} is not in your todo list`;
    }
  } else if (action === "what" && words[1] === "is" && words[2] === "on" && words[3] === "my" && words[4] === "todo?") {
    if (voiceAssistant.todos.length === 0) {
      return "You have no todos.";
    } else {
      const todoList = voiceAssistant.todos.join(" and ");
      return `You have ${voiceAssistant.todos.length} todos - ${todoList}`;
    }
  } else if (action === "what" && words[1] === "day" && words[2] === "is" && words[3] === "it" && words[4] === "today?") {
    const today = new Date();
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return today.toLocaleDateString(undefined, dateOptions);
  } else if (action === "set" && words[1] === "a" && words[2] === "timer" && words[3] === "for") {
    const minutes = parseInt(words[4]);
    if (!isNaN(minutes)) {
      voiceAssistant.timer = setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60 * 1000);
      return `Timer set for ${minutes} minutes`;
    }
  } else {
    return "Sorry, I don't understand that command.";
  }
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); // "You have 1 todos - fishing"
console.log(getReply("What day is it today?")); // e.g., "23. of September 2023"
console.log(getReply("Set a timer for 4 minutes")); // "Timer set for 4 minutes"
