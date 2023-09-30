document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("userName");
  const myButton = document.getElementById("myButton");

  myButton.addEventListener("click", function () {
    const name = userName.value;
    if (name === "") {
      alert("Please write your name");
    } else {
      const animalSpirits = [
        "The Fullmoon Wolf",
        "The Wise Owl",
        "The Clever Fox",
        "The Majestic Eagle",
        "The Forest Bear",
        "The Nocturnal Jaguar",
        "The Enigmatic Lynx",
        "The Shadow Tiger",
        "The Golden Lion",
        "The Soaring Hawk",
      ];
      let i = Math.floor(Math.random() * animalSpirits.length);
      let userAnimalSpirit = animalSpirits[i];

      alert(`Receive a spirit animal name: ${name} - ${userAnimalSpirit}`);
    }
  });
});
