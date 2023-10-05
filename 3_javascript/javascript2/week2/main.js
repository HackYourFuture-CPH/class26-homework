// console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    const productList = document.querySelector("ul");
  
    productList.innerHTML = '';

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

////////////////////////////////////////week 2////////////////////////////////////////
////2.2 Searching for products

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  renderProducts(filteredProducts);
});



////2.3. Filter products based on max price

const maxPriceInput = document.getElementById('maxPriceInput');

maxPriceInput.addEventListener('input', function () {
  const maxPrice = parseFloat(maxPriceInput.value);

  const filteredProducts = products.filter(product => product.price <= maxPrice);

  renderProducts(filteredProducts);
});


////////2.4. Make the website look nicer!
//CSS added


////////2.5. Create some extra feature
//Filter products based on rate (I know it is not so different, sorry, have not anything my mind)

const highRate = document.getElementById('highRate');

highRate.addEventListener('input', function () {
  const maxRate = parseFloat(highRate.value);

  const filteredProducts = products.filter(product => product.rating >= maxRate);

  renderProducts(filteredProducts);
});




