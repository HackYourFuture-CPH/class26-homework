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