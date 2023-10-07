console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);


// Event listener for the search/filter button
document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const priceInput = parseFloat(document.getElementById('priceInput').value);

    // Filter products based on search query and max price
    const filteredProducts = products.filter(product => {
        const nameMatches = product.name.toLowerCase().includes(searchInput);
        const priceMatches = isNaN(priceInput) || product.price <= priceInput;

        return nameMatches && priceMatches;
    });

    // Render the filtered products
    renderProducts(filteredProducts);
});

// Event listener for the clear filters button
document.getElementById('clearFiltersButton').addEventListener('click', function () {
    // Clear the input fields
    document.getElementById('searchInput').value = '';
    document.getElementById('priceInput').value = '';

    // Render all products again
    renderProducts(products);
});