document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  const products = getAvailableProducts();
  console.log(products);

  function renderProducts(products) {
    const completeList = document.querySelector("ul");

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const listProducts = document.createElement("li");
      listProducts.innerHTML = `<strong>${product.name}</strong>
        <p>Price: ${product.price}</p> 
        <p>Rating: ${product.rating}/10</p>`;

      completeList.appendChild(listProducts);
    }
  }

  renderProducts(products);
});
