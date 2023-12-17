// Exercise: Online Shop

// Part 1: Primitive Types
// Define a type 'Product' with properties 'id' (number), 'name' (string), and 'price' (number).
type Product = {
  //...
};

// Bonus: how it would look like as an interface?

// Part 2: Union Types
// Create a type 'CartItem' that can be either a 'Product' or a 'string' representing a discount code.
type CartItem = unknown;

// Part 3: Literal Types
// Declare a constant 'DISCOUNT_CODE' with a type of 'SUMMER_SALE'.
const DISCOUNT_CODE: unknown = undefined;

// Part 4: Arrays
// Create an array 'cart' that can contain multiple 'CartItem' types.
let cart;

// Part 5: Objects
// Declare an object 'user' with properties 'id' (number), 'name' (string), and 'email' (string).
let user;

// Part 6: Optional Properties and Optional Chaining
// Extend the 'user' object to make 'phone' an optional property.
user.phone = "+1234567890";

// Part 7: Interfaces
// Create an interface 'Order' with properties 'id' (number), 'user' (user object), and 'items' (array of 'CartItem').
// interface ...

// We have used the user type a few times now (Part 5 and here in Part 7
// Maybe it is about time to declare it as a type and use that instead?

// Part 8: Extending
// Extend the 'Order' interface to include an optional 'discountCode' property (string).
// interface ...

// Part 9: Functions
// Declare a function 'calculateTotal' that takes an 'Order' and returns the total price (number).
function calculateTotal(order) {
  //   return order.items...
}

// Part 10: Usage
// Create a discounted order using the defined structures and log the calculated total.
const order = undefined;
const total = undefined;
console.log("Total Price:", total);
