

console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


const ul = document.querySelector("#productList")

function renderProducts(products) {
products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = 
     `<strong>${product.name}</strong><br>
     Price: ${product.price}<br>
     Rating: ${product.rating}`;

     ul.appendChild(li);
});
};

renderProducts(products); 

//2.1. Filter product , 2.2 Searching for products, 2.3. Filter products based on max price

function renderProducts(productArray) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (productArray.length === 0) {
      resultsDiv.textContent = "No matching products found.";
    } else {
      productArray.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.textContent = `${product.name} = price: ${product.price}`;
        resultsDiv.appendChild(productDiv);
      });
    }
  }

const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      const priceInput = parseFloat(document.getElementById("priceInput").value);

      const filteredProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchInput) && (!priceInput || product.price <= priceInput);
      });

      renderProducts(filteredProducts);

      // some extra feature

      const clearFiltersButton = document.getElementById('clearFiltersButton');
      clearFiltersButton.addEventListener('click', clearFilters);

      function clearFilters() {
        const searchInput = document.getElementById('searchInput');
        const priceInput = document.getElementById('priceInput');
        searchInput.value = '';
        priceInput.value = ''; 
        filteredProducts(products); 
        } ;
      
        clearFilters();

    });


  

