console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// Encapsulate your code inside a function that runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Function to display a list of products
    function renderProducts(products, targetElementId) {
      // Get a link to the ul tag where we will add products
      const productList = document.querySelector(`#${targetElementId}`);
  
      // Clear the ul contents before adding new products
      productList.innerHTML = '';
  
      // Iterate through each product in the array
      products.forEach((product) => {
        // Create an li element for each product
        const productItem = document.createElement('li');
  
        // Fill the contents of the li tag with information about the product (name, price, and rating)
        productItem.innerHTML = `
          <strong>${product.name}</strong><br>
          Price: $${product.price}<br>
          Rating: ${product.rating}/10
        `;
  
        // Add the li tags to the ul tag
        productList.appendChild(productItem);
      });
    }
  
    // Example product data
    const products = [
      {
        name: 'Product 1',
        price: 11.49,
        rating: 5.5,
      },
      {
        name: 'Product 2',
        price: 31.79,
        rating: 7.30,
      },
      // Add more products as needed
    ];
  
    // Calling the function to display a list of products
    renderProducts(products, 'productList');
  });
  




