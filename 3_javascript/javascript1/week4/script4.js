let aboutMe = [];

function getReply(command) {
    if (command.includes("Hello my name is")) {
        const name = command.split("Hello my name is ")[1];

        if (aboutMe.includes(name)) {
            return "You have already said that!";
        }

        aboutMe.push(name);

        return `Nice to meet you ${name}`;
    }

    return "I'm sorry, I don't understand that command.";
}

//Making a todo list and saving the values in the array aboutMe

function toDoList (activity) {
if (activity === "fishing" || activity === "singing in the shower") {
    aboutMe.push(activity);
return `${activity} added to your todo`;
}
}

//Remove fishing from my toDoList

function activityToRemove(activity) {
    let remainingActivities = aboutMe.filter(todo => todo !== activity);
    aboutMe = remainingActivities;
    return `removed ${activity} from your todo list`;
}
// what is on my todo

function viewToDo() {
    const excludedNames = ["Benjamin", "Ben"];
    const activities = aboutMe.filter(activity => !excludedNames.includes(activity));
    if (activities.length > 0) {
        console.log(`Your todo list: ${activities.join(", ")}`);
    } else {
        console.log("Your todo list is empty");
    }
}



console.log(getReply("Hello my name is Benjamin")); // Output: "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // Output: "I'm sorry, I don't understand that command."
console.log(getReply("Hello my name is Ben")); // Output: "Nice to meet you Ben"
console.log(getReply("Hello my name is Benjamin")); // Output: "You have already said that!"
console.log(aboutMe); // Output: ["Benjamin"]
console.log(toDoList("fishing")); //fishing added to your todo
console.log(toDoList("singing in the shower")); //singing in the shower added to your todo
console.log(aboutMe); // Output: ['Benjamin', 'Ben', 'fishing', 'swimming']
console.log(activityToRemove("fishing")); // [removed fishing from your todo list]
console.log(viewToDo());
