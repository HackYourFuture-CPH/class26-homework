

const User ={
    userName:"",
    todos:[],

} 
function getReply(command) {
    userName = extractName(command)
    //command format: Hello my Name is Name
    if (command.match("Hello my Name is ")) {
        return `Nice to meet you ${User.userName}!`;
    }  if (command.match ("What is my name?")) {
        return `Your name is ${User.userName}`;
    }
    if(command.match("Add fishing to my todo")){
        let taskToAdd = "fishing";
        const response = getReply(taskToAdd);
        User.todos.push(taskToAdd);
        return `${taskToAdd} added to your todo`;
      
    }
    return ("to be completed")
}
   
function extractName(sentence) {
    const nameStartIndex = "Hello my Name is ".length;
    const name = sentence.substring(nameStartIndex);
    return name;
}       


console.log(getReply("Hello my Name is Hamadi"));
console.log(getReply("What is my name?"));
console.log(response);