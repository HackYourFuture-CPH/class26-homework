console.log("Script loaded");

// Get the available products using the provided function
const products = getAvailableProducts();
console.log(products);

// Get references to the search input and max price input elements
const searchInput = document.querySelector('#searchInput');
const maxPriceInput = document.querySelector('#maxPriceInput');

// Function to render products based on a filtered array
function renderFilteredProducts(filteredProducts) {
    // Get a reference to the ul tag where we will add filtered products
    const productList = document.querySelector('#productList');

    // Clearing ul contents before adding new products
    productList.innerHTML = '';

    // Loop through each filtered product and create li elements
    filteredProducts.forEach((product) => {
        const productItem = document.createElement('li');

        // Fill the contents of li tag with information about the product (name, price, and rating)
        productItem.innerHTML = `
            <strong>${product.name}</strong><br>
            Price: $${product.price}<br>
            Rating: ${product.rating}/10
        `;

        // Adding the li tags to ul tag
        productList.appendChild(productItem);
    });
}

// Function to handle the search input and filter products accordingly
function handleSearchInput() {
    // Get the value entered in the search input, convert to lowercase
    const searchTerm = searchInput.value.toLowerCase();

    // Filter products based on the search term
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm);
    });

    // Render the filtered products
    renderFilteredProducts(filteredProducts);
}

// Function to handle the max price input and filter products accordingly
function handleMaxPriceInput() {
    // Get the value entered in the max price input, convert to a floating-point number
    const maxPrice = parseFloat(maxPriceInput.value);

    // If the entered value is not a valid number or is negative, show all products
    if (isNaN(maxPrice) || maxPrice < 0) {
        renderProducts(products);
        return;
    }

    // Filter products based on the max price
    const filteredProducts = products.filter((product) => {
        return product.price <= maxPrice;
    });

    // Render the filtered products
    renderFilteredProducts(filteredProducts);
}

// Add event listeners for both search and max price inputs
searchInput.addEventListener('input', handleSearchInput);
maxPriceInput.addEventListener('input', handleMaxPriceInput);

// Function to render all products
function renderProducts(products) {
    // Get a reference to the ul tag where we will add all products
    const productList = document.querySelector('#productList');

    // Clearing ul contents before adding new products
    productList.innerHTML = '';

    // Loop through each product and create li elements
    products.forEach((product) => {
        const productItem = document.createElement('li');

        // Fill the contents of li tag with information about the product (name, price, and rating)
        productItem.innerHTML = `
            <strong>${product.name}</strong><br>
            Price: $${product.price}<br>
            Rating: ${product.rating}/10
        `;

        // Adding the li tags to ul tag
        productList.appendChild(productItem);
    });
}

// Call the function to render all products when the page loads
renderProducts(products);
