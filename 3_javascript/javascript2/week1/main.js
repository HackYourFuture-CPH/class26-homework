const products = getAvailableProducts();

function renderProducts(products) {
  const ul = document.querySelector('#productList'); // Select the <ul> element

   for (const product of products) {
   
    const li = document.createElement('li');

      li.innerHTML = `<strong>Title:</strong> ${product.name}<br>
      <strong>Price:</strong> $${product.price}<br>
      <strong>Rating:</strong> ${product.rating}`;

    ul.appendChild(li);
  }
}

renderProducts(products);





