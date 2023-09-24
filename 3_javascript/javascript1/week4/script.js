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
  }
}

console.log(getReply("add this to my todo"));
