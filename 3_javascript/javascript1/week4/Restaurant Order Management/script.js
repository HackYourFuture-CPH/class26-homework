let restaurantMenu = [
  { dishName: "Spaghetti Carbonara", price: 12, isAvailable: true },
  { dishName: "Chicken Parmesan", price: 15, isAvailable: false },
  { dishName: "Hamburger", price: 25, isAvailable: true },
  { dishName: "Durum Shawerma", price: 10, isAvailable: true },
];

function orderDish(dishName) {
  const dish = findDishByName(dishName);

  if (!dish) {
    console.log(`We're sorry, ${dishName} is not available today.`);
  } else if (!dish.isAvailable) {
    console.log(`We're sorry, ${dishName} is not available today.`);
  } else {
    console.log(`Your order for ${dishName} has been placed!`);
  }
}

function checkPrice(dishName) {
  const dish = findDishByName(dishName);

  if (!dish) {
    console.log(`Sorry, we don't have ${dishName} on our menu.`);
  } else {
    console.log(`Your bill for ${dishName} is $${dish.price}.`);
  }
}

function dailySpecial() {
  let availableDishes = [];

  for (let i = 0; i < restaurantMenu.length; i++) {
    if (restaurantMenu[i].isAvailable) {
      availableDishes.push(restaurantMenu[i]);
    }
  }

  if (availableDishes.length === 0) {
    console.log("Sorry, there are no daily specials available today.");
  } else {
    const randomIndex = Math.floor(Math.random() * availableDishes.length);
    const specialDish = availableDishes[randomIndex];
    console.log(
      `Today's special is ${specialDish.dishName} for only $${specialDish.price}!`
    );
  }
}

function findDishByName(name) {
  const lowerCaseName = name.toLowerCase();
  for (let i = 0; i < restaurantMenu.length; i++) {
    const dish = restaurantMenu[i];
    if (dish.dishName.toLowerCase() === lowerCaseName) {
      return dish;
    }
  }
  return false;
}

orderDish("Spaghetti Carbonara");
checkPrice("Hamburger");
dailySpecial();
orderDish("Chicken Parmesan");
checkPrice("Pizza");
