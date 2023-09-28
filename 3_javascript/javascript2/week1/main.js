console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    const productList = document.querySelector("ul");
  
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = 
      `<strong>${product.name}</strong>
        <p>Price: ${product.price}</p> 
        <p>Rating: ${product.rating}/10</p>`;
  
      productList.appendChild(listItem);
    });
  }
  
renderProducts(products);

