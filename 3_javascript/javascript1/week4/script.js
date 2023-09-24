let userName = "";
todoList = [];

function getReply(command) {
  const lowerCommnad = command.toLowerCase();

  //** my Name command */
  if (lowerCommnad.startsWith("hello my name is ")) {
    const name = command.substring("hello my name is".length);

    userName = name;

    return `Nice to meet you ${name}`;
  } else if (lowerCommnad === "what is my name") {
    if (userName) {
      return `Your name is ${userName}`;
    } else {
      return "I don't know your name.";
    }
  } /** todo list **/ else if (
    lowerCommnad.startsWith("add ") &&
    lowerCommnad.endsWith(" to my todo")
  ) {
    const task = command.substring(
      "add ".length,
      command.length - " to my todo".length
    );
    todoList.push(task);
    return `${task} added to your todo`;
  } else if (
    lowerCommnad.startsWith("remove ") &&
    lowerCommnad.endsWith(" from my todo")
  ) {
    const task = command.substring(
      "remove ".length,
      command.length - " from my todo".length
    );
    const index = todoList.indexOf(task);
    if (index !== -1) {
      todoList.splice(index, 1);
      return `Removed ${task} from your todo`;
    } else {
      return `${task} is not in your todo list`;
    }
  } else if (lowerCommnad === "what is on my todo") {
    if (todoList.length === 0) {
      return "Your todo list is empty";
    } else {
      const todoString = todoList.join(" and ");
      return `You have ${todoList.length} todos - ${todoString}`;
    }
  } else if (lowerCommnad === "what day is it today") {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
  else if(){};
}

console.log(getReply("add this that to my todo"));
console.log(getReply("add run to my todo"));
console.log(getReply("add fight to my todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("what day is it today"));
