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

//filter products based on the search keyword
function filterProducts(keyword) {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(keyword);
  });
}

//update the displayed products
