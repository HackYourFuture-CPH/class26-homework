console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.getElementById('product-list');
const searchInput = document.getElementById('product-search');
const sortSelect = document.getElementById('sort-select');
const countrySelect = document.getElementById('country-select');
const priceRangeInput = document.getElementById('price-range');
const priceRangeLabel = document.querySelector('.price label');
const cartTotal = document.getElementById('cart-total');
const cartItemsUl = document.getElementById('cart-items');

// Initialize shopping cart
const cart = [];

// Function to render products based on filters
function renderProducts(products) {
    productsUl.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;
    const selectedCountry = countrySelect.value;
    const maxPrice = priceRangeInput.value;

    // Filter products based on user input
    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const countryMatch = selectedCountry === 'all' || product.shipsTo.includes(selectedCountry);
        const priceMatch = parseFloat(product.price) <= parseFloat(maxPrice);

        return nameMatch && countryMatch && priceMatch;
    });

    // Sort the filtered products
    filteredProducts.sort((a, b) => {
        if (sortBy === 'cheap') {
            return a.price - b.price;
        } else if (sortBy === 'expensive') {
            return b.price - a.price;
        } else if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
    });

    // Render the filtered and sorted products
    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <ul>
                <li class="name">${product.name}</li>
                <li>${product.price} DKK</li>
                <li>Rating: ${product.rating}</li>
                <ul class="ships-to">
                    <li>Ships to:</li>
                    ${product.shipsTo.map(country => `<li>${country}</li>`).join('')}
                </ul>
                <button onclick="addToCart('${product.id}')">Add to Cart</button>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        renderCart();
    }
}

// Function to render the shopping cart
function renderCart() {
    cartItemsUl.innerHTML = '';
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        cartItemsUl.appendChild(li);
    });

    // Calculate and display the total price in the cart
    const total = cart.reduce((acc, product) => acc + parseFloat(product.price), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Event listeners for filtering products
searchInput.addEventListener('input', () => renderProducts(products));
sortSelect.addEventListener('change', () => renderProducts(products));
countrySelect.addEventListener('change', () => renderProducts(products));
priceRangeInput.addEventListener('input', () => {
    renderProducts(products);
    priceRangeLabel.textContent = `Max Price: ${priceRangeInput.value} DKK`;
});

// Initial rendering of products
renderProducts(products);
