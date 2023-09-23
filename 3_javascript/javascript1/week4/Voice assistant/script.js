const users = [{ name: "Benjamin", todo: [] }];
let userName = "";

function getReply(command) {
  const greetingPatron = /Hello my name is (\w+)/;
  const greetingMatch = greetingPatron.test(command);

  if (greetingMatch) {
    const searchName = command.split(" ");
    userName = searchName[searchName.length - 1];

    let isUser = false;

    for (let i = 0; i < users.length; i++) {
      const registeredUserName = users[i].name;
      if (registeredUserName === userName) {
        isUser = true;
        break;
      }
    }

    if (isUser) {
      console.log(`Hi ${userName}, good to see you again! `);
    } else {
      const newUser = { name: `${userName}`, todo: [] };
      users.push(newUser);
      console.log(`Nice to meet you ${userName}`);
    }
  } else if (command === "What is my name?") {
    if (userName !== "") {
      console.log(`Your name is ${userName}`);
    } else {
      console.log(
        "I didn't have the pleasure of introducing myself. I'm your VoiceAssistant. What's your name?"
      );
    }
  } else if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const taskToAdd = command.replace("Add ", "").replace(" to my todo", "");

    // Busca al usuario actual por su nombre
    for (let i = 0; i < users.length; i++) {
      const currentUser = users[i];
      if (currentUser.name === userName) {
        currentUser.todo.push(taskToAdd);
        console.log(`${taskToAdd} added to your todo.`);
        break;
      }
    }
  } else if (
    command.startsWith("Remove ") &&
    command.endsWith(" from my todo")
  ) {
    const taskToRemove = command
      .replace("Remove ", "")
      .replace(" from my todo", "");

    for (let i = 0; i < users.length; i++) {
      const currentUser = users[i];
      if (currentUser.name === userName) {
        const todoIndex = currentUser.todo.indexOf(taskToRemove);
        if (todoIndex !== -1) {
          currentUser.todo.splice(todoIndex, 1);
          console.log(`Removed ${taskToRemove} from your todo.`);
        } else {
          console.log(`The task "${taskToRemove}" was not found in your todo.`);
        }
        break;
      }
    }
  } else if (command === "What is on my todo?") {
    for (let i = 0; i < users.length; i++) {
      const currentUser = users[i];
      if (currentUser.name === userName) {
        const todoList = currentUser.todo.join(", ");
        if (todoList) {
          console.log(`Your todo list: ${todoList}`);
        } else {
          console.log(`Your todo list is empty.`);
        }
        break;
      }
    }
  } else if (command.startsWith("What is ")) {
    const mathQuestion = command.replace("What is ", "");

    const match = mathQuestion.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);

    if (match) {
      const operand1 = parseFloat(match[1]);
      const operator = match[2];
      const operand2 = parseFloat(match[3]);

      let result;

      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          if (operand2 !== 0) {
            result = operand1 / operand2;
          } else {
            console.log("Division by zero is not allowed.");
            return;
          }
          break;
        default:
          console.log("Invalid operator.");
          return;
      }

      console.log(`The result is ${result}.`);
    } else {
      console.log("Invalid math question format.");
    }
  } else if (command.startsWith("Set a timer for ")) {
    const words = command.split(" ");

    const minutesIndex = words.indexOf("minutes");
    if (minutesIndex !== -1) {
      const minutes = parseFloat(words[minutesIndex - 1]);
      if (!isNaN(minutes) && minutes > 0) {
        console.log("Timer set for " + minutes + " minute(s).");

        timer = setTimeout(function () {
          console.log("Timer done.");
        }, minutes * 60 * 1000);
      } else {
        console.log("Invalid timer duration.");
      }
    } else {
      console.log("Invalid timer format.");
    }
  } else if (command === "What day is it today?") {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    console.log(day + " of " + month + " " + year);
  } else if (command.startsWith("Add my birthday")) {
    const birthdayPattern = /(\d{1,2}\/\d{1,2}\/\d{4})/;
    const birthdayMatch = command.match(birthdayPattern);

    if (birthdayMatch) {
      const birthdayDate = new Date(birthdayMatch[1]);
      const currentDate = new Date();
      const timeUntilBirthday = birthdayDate - currentDate;

      if (timeUntilBirthday > 0) {
        timer = setTimeout(function () {
          console.log("Happy birthday, " + userName + "!");
        }, timeUntilBirthday);

        for (let i = 0; i < users.length; i++) {
          if (users[i].name === userName) {
            users[i].birthday = birthdayMatch[1];
            break;
          }
        }

        console.log("Birthday set for " + birthdayMatch[1]);
      } else {
        console.log("Your birthday has already passed this year.");
      }
    } else {
      console.log("Invalid birthday format. Please use the format dd/mm/yyyy.");
    }
  }
}

getReply("Hello my name is Anna");
getReply("What is my name?");
getReply("Add fishing to my todo");
getReply("Add shopping to my todo");
getReply("What is on my todo?");
getReply("What is 3+3?");
getReply("What is 4 * 12?");
getReply("What is 10 / 0?");
getReply("What is 10 / 0?");
getReply("Hello my name is Nico");
getReply("Add my birthday 29/01/1990");
getReply("What day is it today?");
getReply("What is my name?");
getReply("Add football to my todo");
getReply("Add my birthday 29/01/90");
console.log(users);
