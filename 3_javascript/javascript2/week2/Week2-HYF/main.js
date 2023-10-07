console.log("Script loaded");

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
renderProducts(products);

//filter by title
const searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", () => {
  const searchKeyword = searchInput.value.toLowerCase();
  const filteredProducts = filterProducts(searchKeyword);
  updateDisplayedProducts(filteredProducts);
});

//Searching for products
function filterProducts(keyword) {
  return products.filter((product) => {
    return product.title.includes(keyword);
  });
}

//Filter products based on max price
const maxPriceInput = document.getElementById("maxPriceInput");

maxPriceInput.addEventListener("input", () => {
  const maxPrice = parseFloat(maxPriceInput.value); // Get the maximum price as a number
  const filteredProducts = filterProductsByMaxPrice(maxPrice);
  updateDisplayedProducts(filteredProducts);
});
function filterProductsByMaxPrice(maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}
