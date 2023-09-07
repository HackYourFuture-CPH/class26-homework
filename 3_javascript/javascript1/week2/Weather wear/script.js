function temperature(degrees) {
  if (degrees >= -20 && degrees <= 5) {
    console.log(
      `Temperature now is ${degrees}°C, you should wear a Winter Jacket`
    );
  } else if (degrees >= 6 && degrees <= 15) {
    console.log(`Temperature now is ${degrees}°C, you should wear a Hodie`);
  } else if (degrees >= 16 && degrees <= 25) {
    console.log(`Temperature now is ${degrees}°C, you should wear a T-shirt`);
  } else if (degrees >= 26 && degrees <= 45) {
    console.log(
      `Temperature now is ${degrees}°C, you should wear a Hawaiian shirt`
    );
  } else {
    console.log(`Temperature now is ${degrees}°C, You need a Ironman suit`);
  }
}
const clothesToWear = temperature(0);
