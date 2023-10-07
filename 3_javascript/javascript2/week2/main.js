console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);



function renderProducts(products) {
  const productList = document.querySelector("ul");
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerHTML = 
    `<strong>${product.name}</strong>
      <p>Price: ${product.price}</p> 
      <p>Rating: ${product.rating}/10</p>`;

    productList.appendChild(listItem);
  });
}

renderProducts(products); 
//2.2 Searching for products

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  renderProducts(filteredProducts);
});



//2.3. Filter products based on max price

const maxPriceInput = document.getElementById('maxPriceInput');

maxPriceInput.addEventListener('input', function () {
  const maxPrice = parseFloat(maxPriceInput.value);

  const filteredProducts = products.filter(product => product.price <= maxPrice);

  renderProducts(filteredProducts);)