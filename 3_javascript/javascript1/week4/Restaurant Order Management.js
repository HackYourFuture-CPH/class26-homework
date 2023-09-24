let restaurantMenu = [
    { dishName: "Spaghetti Carbonara", price: 12, isAvailable: true },
    { dishName: "Chicken Parmesan", price: 15, isAvailable: false },
    { dishName: "Hamburger", price: 25, isAvailable: true },
    { dishName: "Durum Shawerma", price: 10, isAvailable: true },
  ];
  
  // Function to order a dish
  function orderDish(dishName) {
    for (let i = 0; i < restaurantMenu.length; i++) {
      let dish = restaurantMenu[i];
      if (dish.dishName.toLowerCase() === dishName.toLowerCase()) {
        if (dish.isAvailable) {
          console.log(`Your order for ${dishName} has been placed!`);
        } else {
          console.log(`We're sorry, ${dishName} is not available today.`);
        }
        return;
      }
    }
    console.log(`Sorry, we don't have ${dishName} on our menu.`);
  }
  
  // Function to check the price of a dish
  function checkPrice(dishName) {
    for (let i = 0; i < restaurantMenu.length; i++) {
      let dish = restaurantMenu[i];
      if (dish.dishName.toLowerCase() === dishName.toLowerCase()) {
        console.log(`Your bill for ${dishName} is $${dish.price}.`);
        return;
      }
    }
    console.log(`Sorry, we don't have ${dishName} on our menu.`);
  }
  
  // Function to get the daily special
  function dailySpecial() {
    let availableDishes = restaurantMenu.filter((dish) => dish.isAvailable);
    if (availableDishes.length === 0) {
      console.log("Sorry, there are no available specials today.");
    } else {
      let randomIndex = Math.floor(Math.random() * availableDishes.length);
      let specialDish = availableDishes[randomIndex];
      console.log(`Today's special is ${specialDish.dishName} for only $${specialDish.price}!`);
    }
  }
  
  orderDish("Spaghetti Carbonara");
  checkPrice("Hamburger");
  dailySpecial();