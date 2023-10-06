//hyfBay - get the okay'est products here

const products = getAvailableProducts();

function renderProducts(products) {
  const productList = document.querySelector("ul");

  productList.innerHTML = "";

  for (const product of products) {
    const listItem = document.createElement("li");

    listItem.innerHTML = `<strong>${product.name}</strong><br>
                          Price: $${product.price}<br>
                          Rating: ${product.rating}`;

    productList.appendChild(listItem);
  }
}

renderProducts(products);

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", () => {
  const userQuery = searchInput.value.toLowerCase();

  const maxPriceInput = parseFloat(
    document.querySelector("#maxPriceInput").value
  );

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(userQuery) && product.price <= maxPriceInput;
  });

  renderProducts(filteredProducts);
});
