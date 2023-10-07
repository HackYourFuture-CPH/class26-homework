console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const productList = document.querySelector('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `
     <p>Name: ${product.name}</p>
     <p>Price: $${product.price}</p>
     <p>Rating: ${product.rating}</p>`;
    productList.appendChild(li);
  });
}

renderProducts(products);

//2.2

const searchProduct = document.getElementById('searchProduct');

searchProduct.addEventListener('input', function () {
  const searchText = searchProduct.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );

  const productList = document.querySelector('ul');
  productList.innerHTML = '';

  renderProducts(filteredProducts);
});

//2.3

const maximumPrice = document.getElementById('maximumPrice');

maximumPrice.addEventListener('input', function () {
  const maxPrice = parseFloat(maximumPrice.value);

  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );

  renderProducts(filteredProducts);
});

//2.4 the code is in the css file

//2.5 the code is in the css file

//2.6 can't get/find my way around it SOORY!!
