console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// Function to display a list of products
function renderProducts(products) {
    // We get a link to the ul tag where we will add products
    const productList = document.querySelector('#productList');

    // Clearing ul contents before adding new products
    productList.innerHTML = '';

    // We go through each product in the array
    products.forEach((product) => {
        // Create an li element for each product
        const productItem = document.createElement('li');

        // We fill the contents of li tag with information about the product (name, price and rating)
        productItem.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: $${product.price}<br>
      Rating: ${product.rating}/10
    `;

        // Adding the li tags to ul tag
        productList.appendChild(productItem);
    });
}

// Calling a function to display a list of products
renderProducts(products);
