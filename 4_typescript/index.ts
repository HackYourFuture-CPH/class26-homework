///////class 
//console.log("hej")

// const logHej = (hej: number) => {
//     console.log(hej);
// }

// logHej(2);
// logHej({name: "myname"})
// logHej(2)

// const a = 4;


////////////homework
// Exercise: Online Shop

// Part 1: Primitive Types
// Define a type 'Product' with properties 'id' (number), 'name' (string), and 'price' (number).
type Product = {
    id: number;
    name: string;
    price: number;
  };
  
  // Bonus: how does it look like as an interface?
  const something: Product = {
    id: 1,
    name: "Example",
    price: 378.4387,
  };
  
  // Part 2: Union Types
  // Create a type 'CartItem' that can be either a 'Product' or a 'string' representing a discount code.
  type CartItem = Product | string;

  
  // Part 3: Literal Types
  // Declare a constant 'DISCOUNT_CODE' with a type of 'SUMMER_SALE'.
  const DISCOUNT_CODE: "SUMMER_SALE" = "SUMMER_SALE";


  // Part 4: Arrays
  // Create an array 'cart' that can contain multiple 'CartItem' types.
  let cart: CartItem[] = []
  
  // Part 5: Objects
  // Declare an object 'user' with properties 'id' (number), 'name' (string), and 'email' (string).
  type User = {
    id: number;
    name: string;
    email: string;
    phone?: string;
  };
  
  // Part 6: Optional Properties and Optional Chaining
  // Extend the 'user' object to make 'phone' an optional property.
  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };
  user.phone = "+1234567890";
  
  // Part 7: Interfaces
  // Create an interface 'Order' with properties 'id' (number), 'user' (user object), and 'items' (array of 'CartItem').
  // interface ...
  interface Order {
    id: number;
    user: User;
    items: CartItem[];
  }
  
  
  // We have used the User type a few times now (Part 5 and here in Part 7).
  // Maybe it is about time to declare it as a type and use that instead?

  const order222: Order = {
    id: 123,
    user: user,
    items: [
      { id: 456, name: 'Product A', price: 29.99 },
      'SUMMER_SALE',
      { id: 789, name: 'Product B', price: 15.49 }
    ]
  };
  
  // Part 8: Extending
  // Extend the 'Order' interface to include an optional 'discountCode' property (string).
  // interface ...
  interface ExtendedOrder extends Order {
    discountCode?: string; // Optional property
  }

  const order: ExtendedOrder = {
    id: 123,
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    },
    items: [
      { id: 456, name: 'Product A', price: 29.99 },
      'SUMMER_SALE',
      { id: 789, name: 'Product B', price: 15.49 }
    ],
    discountCode: 'DISCOUNT123' // Optional 'discountCode'
  };

  // Part 9: Functions
  // Declare a function 'calculateTotal' that takes an 'Order' and returns the total price (number).
 

  function calculateTotal(order: ExtendedOrder): number {
    let totalPrice: number = 0;
  
    for (const item of order.items) {
      if (typeof item === "object") {
        totalPrice += item.price;
      } else if (typeof item === "string") {
        totalPrice -= 5;
      }
    }
      if (order.discountCode) {
      totalPrice -= 10; 
    }
    return totalPrice;
  }
  
  // Part 10: Usage
  // Create a discounted order using the defined structures and log the calculated total.
//   const order = undefined;

const discountedOrder: ExtendedOrder = {
    id: 456,
    user: {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@example.com'
    },
    items: [
      { id: 101, name: 'Product X', price: 49.99 },
      'WINTER_SALE',
      { id: 202, name: 'Product Y', price: 34.99 }
    ],
    discountCode: 'SALE20'
  };
  
  const discountedTotalPrice = calculateTotal(discountedOrder);
  console.log('Discounted Total Price:', discountedTotalPrice);
  


