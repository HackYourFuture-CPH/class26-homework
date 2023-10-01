const products = getAvailableProducts();

function renderProducts(products) {
  const ul = document.querySelector('#productList'); // Select the <ul> element

  // Loop through the products array
  for (const product of products) {
    // Create an <li> element
    const li = document.createElement('li');

    // Set the innerHTML of the <li> with product details
    li.innerHTML = `
      <strong>Title:</strong> ${product.name}<br>
      <strong>Price:</strong> $${product.price}<br>
      <strong>Rating:</strong> ${product.rating}
    `;

    // Append the <li> to the <ul>
    ul.appendChild(li);
  }
}

// Call the renderProducts function with the products array
renderProducts(products);





