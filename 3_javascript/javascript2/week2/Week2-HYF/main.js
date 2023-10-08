const products = getAvailableProducts();

function renderProducts(products) {
  const ul = document.querySelector("#product-list");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Title:</strong> ${product.title}<br>
                    <strong>Price:</strong> $${product.price.toFixed(2)}<br>
                    <strong>Rating:</strong> ${product.rating}`;
    ul.appendChild(li);
  });
}

//rendering of products
renderProducts(products);

// Filter by title
const searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", () => {
  const searchKeyword = searchInput.value.toLowerCase();
  const filteredProducts = filterProducts(searchKeyword);
  renderProducts(filteredProducts);
});

// Filter products based on max price
const maxPriceInput = document.getElementById("start");
maxPriceInput.addEventListener("input", () => {
  const maxPrice = parseFloat(maxPriceInput.value);
  const filteredProducts = filterProductsByMaxPrice(maxPrice);
  renderProducts(filteredProducts);
});

function filterProducts(keyword) {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(keyword);
  });
}

function filterProductsByMaxPrice(maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}
