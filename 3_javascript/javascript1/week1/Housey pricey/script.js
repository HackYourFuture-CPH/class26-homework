// House details
const peterHouse = {
    name: "Peter",
    wide: 8,
    deep: 10,
    high: 10,
    garden: 100,
    cost: 2500000
  };
  
  const juliaHouse = {
    name: "Julia",
    wide: 5,
    deep: 11,
    high: 8,
    garden: 70,
    cost: 1000000
  };
  
  // Peter's house price
  const peterVolumeInMeters = peterHouse.wide * peterHouse.deep * peterHouse.high;
  const peterGardenSizeInM2 = peterHouse.garden;
  const peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
  
  // Julia's house price
  const juliaVolumeInMeters = juliaHouse.wide * juliaHouse.deep * juliaHouse.high;
  const juliaGardenSizeInM2 = juliaHouse.garden;
  const juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
  
  // Comparation
  console.log("Peter's house:");
  console.log(`- Actual Price: $${peterHouse.cost}`);
  console.log(`- Expected Price: $${peterHousePrice}`);
  
  if (peterHouse.cost < peterHousePrice) {
    console.log("Peter is making a great deal!!");
  } else if (peterHouse.cost > peterHousePrice) {
    console.log("Peter is paying too much for the house.");
  } else {
    console.log("Peter is paying the expected price for the house.");
  }
  
  console.log("");
  
  console.log("Julia's house:");
  console.log(`- Actual Price: $${juliaHouse.cost}`);
  console.log(`- Expected Price: $${juliaHousePrice}`);
  
  if (juliaHouse.cost < juliaHousePrice) {
    console.log("Julia is making a great deal!!");
  } else if (juliaHouse.cost > juliaHousePrice) {
    console.log("Julia is paying too much for the house.");
  } else {
    console.log("Julia is paying the expected price for the house.");
  }
  