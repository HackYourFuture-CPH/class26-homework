let userName = [];
const toDoList = [];
let timer;

function getReply(command) {
    if (command.includes("Hello my name is")) {
        const name = command.split("Hello my name is ")[1];

        if (userName.includes(name)) {
            return "You have already said that!";
        }

        userName.push(name);

        return `Nice to meet you ${name}`;
    }

    return "I'm sorry, I don't understand that command.";
}

if (command === "what is my name") {
    return `your name is ${name}`;
}

//Making a todo list and saving the values in the array toDoList

if (command.endsWith("to my todo")) {
let item = command.split("to my to do")[1];
toDoList.push(item);
return `${item} added to your todo list`;
}

//Remove items from my toDoList
if (command.startsWith("remove")) {
let removeItem = command.split("remove")[1];
toDoList.pop(removeItem);
return `Removed ${removeItem} from your todo list`;
}



// what is on my todo

function viewToDo() {
    const excludedNames = ["Benjamin", "Ben"];
    const activities = aboutMe.filter(activity => !excludedNames.includes(activity));
    if (activities.length > 0) {
        console.log(`Your todo list is: ${activities.join(", ")}`);
    } else {
        console.log("Your todo list is empty");
    }
}

// What date is it today
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const now = new Date();
const day = now.getDate(); 
const month = months[now.getMonth()];
const year = now.getFullYear();

// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48

function calculate (num1, num2, operation) {

if (operation ==="add") {
    return num1 + num2;

} else if (operation === "multiply") {
    return num1 * num2;

} else {
    return "Operation not supported";

}
}
let result = calculate (3,3,"add");
let result1 = calculate (4,12,"multiply");
let result2 = calculate (9,3,"Nothing");

// Set a timer for 4 minutes
setTimeout(myTimeout, 4000);

function myTimeout() {
    document.getElementById("demo").innerHTML = "I can do magic, woooooo!";
}


console.log(getReply("Hello my name is Benjamin")); // Output: "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // Output: "I'm sorry, I don't understand that command."
console.log(getReply("Hello my name is Ben")); // Output: "Nice to meet you Ben"
console.log(getReply("Hello my name is Benjamin")); // Output: "You have already said that!"
console.log(aboutMe); // Output: ["Benjamin, Ben"]
console.log(toDoList("fishing")); //fishing added to your todo
console.log(toDoList("singing in the shower")); //singing in the shower added to your todo
console.log(aboutMe); // Output: ['Benjamin', 'Ben', 'fishing', 'swimming']
console.log(activityToRemove("fishing")); // [removed fishing from your todo list]
viewToDo(); //It only shows one output- "singing in the shower" as I had deleted the first activity in the previous task.
console.log(`Today is ${day}. of ${month} ${year}`); //It works without a function. DO I still have to create a function?
console.log (`Your answer is ${result}`);
console.log (`Your answer is ${result1}`);
console.log (`${result2}`);