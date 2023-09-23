

const user = {
    userName: "",
    todos: []
}

function getReply(command) {

    //command format: Hello my Name is Name
    if (command.match("Hello my Name is ")) {
        user.userName = extractName(command)
        return `Nice to meet you ${user.userName}!`;
    }
    //command format: "What is my name?"
    if (command.match("What is my name?")) {
        return `Your name is ${user.userName}`;
    }

    //command format: Add task to my todo
    const addPrefix = "Add ";
    const addSuffix = " to my todo";
    if (command.startsWith(addPrefix) && command.endsWith(addSuffix)) {
        const task = command.slice(addPrefix.length, -addSuffix.length); // Extract the task dynamically
        user.todos.push(task);
        return `${task} added to your todo`;
    }
    // remove task to my todo
    const removePrefix = "Remove ";
    const removeSuffix = " from my todo";
    if (command.startsWith(removePrefix) && command.endsWith(removeSuffix)) {
        const task = command.slice(removePrefix.length, -removeSuffix.length); // Extract the task dynamically  
        const index = user.todos.indexOf(task);
        if (index !== -1) {
            user.todos.splice(index, 1);
            return `Removed ${task} from your todo`;
        } else {
            return `${task} was not found in your todo list`;
        }
    }
    // whats in my todo 
    if (command.match("What is on my todo?")){
        const numTodos = user.todos.length;
        if (numTodos == 0) {
            return "You have no todos.";
          } else if (numTodos == 1) {
            return "You have 1 todo: " + user.todos[0];
          } else {
            return `You have ${numTodos} todos: ${user.todos.join(', ')}`;
          }
    }
    // what day is today 
    if (command.match("What day is it today?")){
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
         return today.toLocaleDateString(undefined, options);
    }

    // what is 
    const questionPrefix = "what is " 
    if (command.startsWith(questionPrefix)){
        
        const question = command.slice(questionPrefix.length, command.length); // Extract the task dynamically
        const result = eval(question);
        if (isNaN(result)){
            return "Invalid question"
        } else {
            return result
        }
    }

    const timerPrefix = "Set a timer for ";
    const timerSuffix = " minutes";
    if (command.startsWith(timerPrefix) && command.endsWith(timerSuffix)) {
        const numberOfMinutes = command.slice(timerPrefix.length, -timerSuffix.length); // Extract the minutes dynamically
        setTimer(numberOfMinutes);
    }
    return ("to be completed")
}
// username 
function extractName(sentence) {
    const nameStartIndex = "Hello my Name is ".length;
    const name = sentence.substring(nameStartIndex);
    return name;
}

function setTimer(minutes) {
    console.log(`Timer set for ${minutes} minute(s)`);
  
    setTimeout(function() {
      console.log("Timer done");
    }, minutes * 60 * 1000); // Convert minutes to milliseconds
}

  
console.log(getReply("Hello my Name is jannah"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("Set a timer for 1 minutes"));