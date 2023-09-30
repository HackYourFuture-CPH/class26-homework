console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const productList = document.querySelector('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${product.name}</h3>
     <p>Price: $${product.price}</p>
     <p>Rating: ${product.rating}</p>`;
    productList.appendChild(li);
  });
}

renderProducts(products);
