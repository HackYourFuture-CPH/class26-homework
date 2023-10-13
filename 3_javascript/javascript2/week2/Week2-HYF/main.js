const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
const searchInput = document.getElementById("searchInput");
const maxPriceInput = document.getElementById("maxPriceInput");
const sortSelect = document.getElementById("sortSelect");
const shipsToSelect = document.getElementById("shipsToSelect");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
  renderProducts(filteredProducts);
});

maxPriceInput.addEventListener("input", () => {
  const maxPrice = parseFloat(maxPriceInput.value);
  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );
  renderProducts(filteredProducts);
});

sortSelect.addEventListener("change", () => {
  const sortOption = sortSelect.value;

  if (sortOption === "cheap") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortOption === "expensive") {
    products.sort((a, b) => b.price - a.price);
  } else if (sortOption === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(products);
});

shipsToSelect.addEventListener("change", () => {
  const selectedCountry = shipsToSelect.value;
  const filteredProducts = products.filter((product) =>
    product.shipsTo.includes(selectedCountry)
  );
  renderProducts(filteredProducts);
});

function renderProducts(products) {
  productsUl.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );
    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price} DKK</li>
                <li>Rating: ${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

// Initial rendering of all products
renderProducts(products);
