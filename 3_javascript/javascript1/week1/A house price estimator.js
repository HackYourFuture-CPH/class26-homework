// Peter
function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

// Define objects for Peter and Julia's house details
const peterHouse = {
    volumeInMeters: 8 * 10 * 10,
    gardenSizeInM2: 100,
};

const juliaHouse = {
    volumeInMeters: 5 * 11 * 8,
    gardenSizeInM2: 70,
};

// Calculate and log the prices
const housePricePeter = calculateHousePrice(peterHouse.volumeInMeters, peterHouse.gardenSizeInM2);
console.log(housePricePeter);

const housePriceJulia = calculateHousePrice(juliaHouse.volumeInMeters, juliaHouse.gardenSizeInM2);
console.log(housePriceJulia);

// Check and log the pricing status
if (housePricePeter > 2500000) {
    console.log("Peter's Pricing is high");
} else {
    console.log("Peter's Pricing is low");
}

if (housePriceJulia > 1000000) {
    console.log("Julia's Pricing is high");
} else {
    console.log("Julia's Pricing is low");
}
