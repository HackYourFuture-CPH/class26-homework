
const user = {
    userName: "Benjamin",
    todos: [],
}


function getReply(command) {
    if (command.match ("Hello my name is" && user.userName)){
        return `Nice to meet you ${user.userName}!`;
    } else if (command.match("Hello my name is")) {return "The name is not a match sorry!"};
    
    if (command.match ("What is my name?")){
        return `Your name is ${user.userName}`;
    }  
    if (command.match (`Add fishing to my todo`)){
        let todo = "fishing";
        user.todos.push(todo);
        return "fishing added to your todo";
    } else if (command.match (`Add singing in the shower to my todo`)){
        let todo = "singing";
        user.todos.push(todo);
        return "singing added to your todo";
    } else if (command.match ("Remove fishing from my todo")){
        let todo = "fishing";
        user.todos.shift(todo)
        return "Removed fishing from your todo"
    } else if (command.match ("What is on my todo?")){
        if (user.todos.length === 0){
            return 'Your todo list is empty.'
        } else {todoList = user.todos.join(' and ');
        return `You have ${user.todos.length} todos: ${todoList}`}
    } 
    
    if (command.match ("What day is it today?")){
        const today = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return today.toLocaleDateString(undefined, options);
    } 
    
    if (command.startsWith('What is ')) {
        const expression = command.substring(8); 
        try {
            const result = eval(expression);
            return `The result is ${result}`;
        } catch (error) {
            return 'I cannot perform that calculation.';
        }
    } 
    if (command.startsWith('Set a timer for ')) {
        const timeStr = command.substring(16); 
        const timeInSeconds = parseInt(timeStr) * 60; 
        
        setTimeout(() => {
            console.log('Timer done');
        }, timeInSeconds * 1000);
        
        return `Timer set for ${timeStr} minutes.`;
    } 

    else {return 'I do not understand that command.';
    }
}


console.log(getReply("Hello my name is Benjamin")); //Nice to meet you Benjamin! 
console.log(getReply("Hello my name is Meraj")); //The name is not a match sorry!

console.log(getReply("What is my name?")); // Your name is Benjamin

console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // singing added to your todo
console.log(getReply("Remove fishing from my todo")); // Removed fishing from your todo
console.log(getReply("What is on my todo?")); // You have 1 todos: singing

console.log(getReply("What day is it today?")); // September 21, 2023

console.log(getReply('What is 3 + 3')); // The result is 6

console.log(getReply('Set a timer for 4 minutes')); // Timer set for 4 minutes ///// Timer done

