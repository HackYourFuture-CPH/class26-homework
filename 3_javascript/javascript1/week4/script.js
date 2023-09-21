// --> Exercise 4: Library Management System <--

let universityLibrary = [
    { title: "Economics 101", author: "Alfred Mill", isBorrowed: false },
    { title: "History of Eldoria", author: "Done, Keith", isBorrowed: true },
    { title: "Dorian Gray", author: "Oscar Wilde", isBorrowed: false },
];

function borrowBook(bookTitle) {
    for (let i = 0; i < universityLibrary.length; i++) {
        if (universityLibrary[i].title === bookTitle) {
            if (universityLibrary[i].isBorrowed) {
                console.log(`The book ${bookTitle} is currently borrowed by someone else.`)
            } else {
                universityLibrary[i].isBorrowed = true;
                console.log(`You've successfully borrowed ${bookTitle}.`);
            } return;
        }
    } console.log(`Sorry, ${bookTitle} is not in our collection.`);
}
borrowBook('History of Eldoria');   // Expected: The book History of Eldoria is currently borrowed by someone else.



function returnBook(bookTitle) {
    for (let r = 0; r < universityLibrary.length; r++) {
        if (universityLibrary[r].title === bookTitle) {
            if (universityLibrary[r].isBorrowed) {
                universityLibrary[r].isBorrowed = false;
                console.log(`Thank you for returning ${bookTitle}.`)
            } else {
                console.log(`The book ${bookTitle} wasn't borrowed`)
            }
            return;
        }
    }
}
returnBook('Economics 101');   // Expected: Thank you for returning Economics 101.



function searchBook(bookTitle) {
    for (let s = 0; s < universityLibrary.length; s++) {
        if (universityLibrary[s].title === bookTitle) {
            if (universityLibrary[s].isBorrowed) {
                console.log(`${bookTitle} by ${universityLibrary[s].author} is currently borrowed.`)
            } else {
                console.log(`${bookTitle} by ${universityLibrary[s].author} is currently available.`)
            }
            return;
        }
    }
    console.log(`Sorry, ${bookTitle} is not in our collection.`)
}
searchBook('Physics for Engineers');  // Expected: Sorry, Physics for Engineers is not in our collection.





// --> Exercise 5: Restaurant Order Management <--

let restaurantMenu = [
    { dishName: "Spaghetti Carbonara", price: 12, isAvailable: true },
    { dishName: "Chicken Parmesan", price: 15, isAvailable: false },
    { dishName: "Hamburger", price: 25, isAvailable: true },
    { dishName: "Durum Shawerma", price: 10, isAvailable: true },
];

// --> Order a Dish

function orderDish(dishName) {
    for (let i = 0; i < restaurantMenu.length; i++) {
        if (restaurantMenu[i].dishName === dishName) {
            if (restaurantMenu[i].isAvailable) {
                console.log(`Your order for ${dishName} has been placed!`);
            } else {
                console.log(`We're sorry, ${dishName} is not available today.`);
            }
        }
    } return
}

orderDish("Spaghetti Carbonara")
orderDish("Chicken Parmesan")
orderDish("Hamburger")

// --> Check the Price

function checkPrice(dishName) {
    for (let c = 0; c < restaurantMenu.length; c++) {
        if (restaurantMenu[c].dishName === dishName) {
            console.log(`Your bill for ${dishName} is $${restaurantMenu[c].price}.`)
            return
        }
    } console.log(`Sorry, we don't have ${dishName} on our menu.`)
}

checkPrice("Spaghetti Carbonara")
checkPrice("Hamburger")
checkPrice("Hamburger2")

// --> Daily Special

function dailySpecial() {
    console.log(`Today's special is ${dishName} for only $${price}!`)
}

function dailySpecial() {
    const availableDishes = restaurantMenu.filter(dish => dish.isAvailable); // Creating an array of available dishes

    if (availableDishes.length === 0) {
        console.log("Sorry, there are no available dishes for today's special.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableDishes.length); // Generating a random index from available dishes
    const specialDish = availableDishes[randomIndex];

    console.log(`Today's special is ${specialDish.dishName} for only $${specialDish.price}!`);
}


dailySpecial();






