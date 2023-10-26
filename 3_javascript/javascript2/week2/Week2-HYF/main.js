const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const completeList = document.querySelector("ul");
  completeList.innerHTML = "";
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

const search = document.getElementById("search");

search.addEventListener("input", searchFuntion);

function searchFuntion() {
  const element = search.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(element)
  );

  renderProducts(filteredProducts);
}

const maxPrice = document.getElementById("maxPrice");

maxPrice.addEventListener("input", maxPriceFilter);

function maxPriceFilter() {
  const currentMaxPrice = parseFloat(maxPrice.value);

  const filteredProducts = products.filter(
    (element) => element.price <= currentMaxPrice
  );

  renderProducts(filteredProducts);
}

const restoreButton = document.getElementById("restart");

restoreButton.addEventListener("click", restoreProducts);

function restoreProducts() {
  renderProducts(products);
  search.value = "";
}
