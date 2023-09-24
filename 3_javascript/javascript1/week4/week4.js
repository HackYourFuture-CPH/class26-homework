//Voice assistant

const userData = {
    name: null,
    todos: [],
  };
  
  
  function getReply(command) {
    const lowerCommand = command.toLowerCase();
  
    
    if (lowerCommand.startsWith("hello my name is ")) {
      const name = command.substring(17);
      userData.name = name;
      return `Nice to meet you ${name}`;
    }
  
    
    if (lowerCommand === "what is my name") {
      if (userData.name) {
        return `Your name is ${userData.name}`;
      } else {
        return "I don't know your name yet.";
      }
    }
  
    
    if (lowerCommand.startsWith("add ") && lowerCommand.endsWith(" to my todo")) {
      const todo = command.substring(4, command.length - 12);
      userData.todos.push(todo);
      return `${todo} added to your todo`;
    }
  
    
    if (lowerCommand.startsWith("remove ") && lowerCommand.endsWith(" from my todo")) {
      const todo = command.substring(7, command.length - 12);
      const index = userData.todos.indexOf(todo);
      if (index !== -1) {
        userData.todos.splice(index, 1);
        return `Removed ${todo} from your todo`;
      } else {
        return `I couldn't find ${todo} in your todo list`;
      }
    }
  
    
    if (lowerCommand === "what is on my todo") {
      const todoCount = userData.todos.length;
      if (todoCount === 0) {
        return "You have no todos.";
      } else {
        const todoList = userData.todos.join(" and ");
        return `You have ${todoCount} ${todoCount === 1 ? "todo" : "todos"} - ${todoList}`;
      }
    }
  
    
    if (lowerCommand === "what day is it today") {
      const currentDate = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return currentDate.toLocaleDateString(undefined, options);
    }
  
    
    if (lowerCommand.startsWith("what is ")) {
      const mathExpression = command.substring(8);
      try {
        const result = eval(mathExpression);
        return result.toString();
      } catch (error) {
        return "";
      }
    }
  
    
    if (lowerCommand.startsWith("set a timer for ")) {
      const timeString = command.substring(16);
      const minutes = parseInt(timeString);
      if (!isNaN(minutes) && minutes > 0) {
        setTimeout(() => {
          console.log("Timer done");
        }, minutes * 60 * 1000); 
        return `Timer set for ${minutes} minutes`;
      } else {
        return "Invalid timer duration.";
      }
    }
  
    
    return "time";
  }
  
  // Example usage:
  console.log(getReply("Hello my name is Benjamin")); 
  console.log(getReply("What is my name?")); 
  console.log(getReply("Add fishing to my todo"));
  console.log(getReply("Remove fishing from my todo")); 
  console.log(getReply("What is on my todo?")); 
  console.log(getReply("What day is it today?")); 
  console.log(getReply("What is 3 + 3?")); 
  console.log(getReply("Set a timer for 4 minutes")); 
  