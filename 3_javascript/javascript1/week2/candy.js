let boughtCandyPrices = [];
function addCandy(candyType, weight) {
    let totalPrice = 0;
    if (candyType === "sweet") {
        totalPrice = 0.5 * weight;
    } else if (candyType === "chocolate") {
        totalPrice = 0.7 * weight;
    } else if (candyType === "toffee") {
        totalPrice = 1.1 * weight;
    } else if (candyType === "chewing-gum") {
        totalPrice = 0.03 * weight;
    } else {
        console.log('Invalid candy type');
        return;
    }
    boughtCandyPrices.push(totalPrice);
}

function canBuyMoreCandy() {
    const amountToSpend = Math.random() * 100;
    let totalPrice = 0;
    
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }

    if (totalPrice < amountToSpend) {
        console.log('You can buy more, so please do!');
        return true;
    } else {
        console.log('Enough candy for you!');
        return false;
    }
}

addCandy("sweet", 20); 
canBuyMoreCandy();