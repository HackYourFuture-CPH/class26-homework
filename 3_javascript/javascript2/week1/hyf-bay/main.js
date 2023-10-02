console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// Define a function to render the products
function renderProducts(products) {
  // Get the ul element from your HTML
  const productList = document.querySelector('#product-list');

  // Loop through the products and create an li for each one
  products.forEach((product) => {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Set the innerHTML of the li to include title, price, and rating
    listItem.innerHTML = `
      <span>Title: ${product.name}</span>
      <span>Price: $${product.price}</span>
      <span>Rating: ${product.rating}</span>
    `;

    // Append the li to the ul
    productList.appendChild(listItem);
  });
}

// Call the renderProducts function to generate the list
renderProducts(products);


