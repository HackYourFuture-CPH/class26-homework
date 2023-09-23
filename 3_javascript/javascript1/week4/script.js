

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


    return ("to be completed")
}
// username 
function extractName(sentence) {
    const nameStartIndex = "Hello my Name is ".length;
    const name = sentence.substring(nameStartIndex);
    return name;
    // remove fishing



}

console.log(getReply("Hello my Name is jannah"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
