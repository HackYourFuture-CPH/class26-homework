// Flight booking fullname function Part !!

function getFullname(firstname, surname) {
    let fullname = firstname + surname;
    return fullname;
  }
  
  let fullname1 = getFullname("Milad ", "Fetrat");
  let fullname2 = getFullname("Amin ", "Hussaini");
  
  console.log("Full Name 1:", fullname1);
  console.log("Full Name 2:", fullname2);
  
  
  
    // Formal fullname Part //
    function getFullname(firstname, surname, useFormalName, isFemale) {
      if (useFormalName) { return "Lord " + firstname + surname; }
      else if (!firstname && !surname) { return "Please provide a valid name."; }
      else if (isFemale) { return "Lady " + firstname + surname; }
      else { return firstname + surname; }
    }
    
    const formalFullName = getFullname("Milad ", "Fetrat", true, false);
    const inFormalFullName = getFullname("Amin ", "Hussaini", false, false);
    const formalFullFemaleName = getFullname("Hanna ", "Jensen", false, true);
    const missingNames = getFullname("", "", false);
    
    console.log("Formal Full Name:", formalFullName);
    console.log("Informal Full Name:", inFormalFullName);
    console.log("Formal Full Female Name:", formalFullFemaleName);
    console.log("Missing Names:", missingNames);
    
  
  
    //Event application//
  
    function getEventWeekday(daysFromToday) {
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date();
      const eventDate = new Date(today);
      eventDate.setDate(today.getDate() + daysFromToday);
      const eventWeekdayIndex = eventDate.getDay();
      const eventWeekday = weekdays[eventWeekdayIndex];
     return eventWeekday;
    };
    
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  console.log(`Today is ${today}`);
  
  console.log(getEventWeekday(7)); // Logs out "Thursday" (if today is Tuesday)
  console.log(getEventWeekday(2)); // Logs out "Sunday" (if today is Friday)
  
  
  
  
  
    //Weather wear function//
  
  
    function suggestClothing(temperature) {
      if (temperature >= 30) {
        return "You should wear shorts and a tank top.";
      } else if (temperature >= 20 && temperature < 30) {
        return "You can wear jeans and a light sweater.";
      } else if (temperature >= 10 && temperature < 20) {
        return "It's a bit chilly. Wear long pants and a jacket.";
      } else {
        return "It's quite cold. Bundle up with a heavy coat and scarf.";
      }
    }
    
    const clothesToWear = suggestClothing(5);
    console.log(clothesToWear); 
  
  
  
  
    //Student manager//
    const class07Students = [];
  
    function addStudentToClass(studentName) {
      if (studentName === "") {
        console.log("You must add a name!");
      } else if (class07Students.includes(studentName)) {
        console.log("This student is already in the class.");
      } else {
        if (studentName.toLowerCase() === "queen") {
          class07Students.push(studentName);
          console.log("Queen has been added to the class!");
        } else if (class07Students.length >= 6) {
          console.log("Cannot add more students to class 07.");
        } else {
          class07Students.push(studentName);
          console.log(`The student ${studentName} has been added to the class.`);
        }
      }
    }
    
    function getNumberOfStudents() {
      return class07Students.length;
    }
    addStudentToClass("Milad"); // The student Milad has been added to the class.//
    addStudentToClass("Nico");
    addStudentToClass("Hamid");
    addStudentToClass("Abbas");
    addStudentToClass("Marcel");
    addStudentToClass("Amir"); //The last student Amir has been added to the class.//
    
    addStudentToClass("Marcel"); // This student is already in the class.
    addStudentToClass("Frank"); // Cannot add more students to class 07.
    addStudentToClass("Queen"); // Queen has been added to the class!
    addStudentToClass(""); // You must add a name.
    
    console.log(`Number of students in class 07: ${getNumberOfStudents()}`);
     
   
  
  
  
  //Candy helper optional!!!//
  
  
  
  const boughtCandyPrices = [];
  function addCandy(candyType, weight) {
    const candyPrices = {
      sweet: 0.5,
      chocolate: 0.7,
      toffee: 1.1,
      'chewing-gum': 0.03,
    };
  
    const pricePerGram = candyPrices[candyType];
    if (pricePerGram !== undefined) {
      const totalPrice = pricePerGram * weight;
      boughtCandyPrices.push(totalPrice);
    } else {
      console.log("Invalid candy type");
    }
  }
  
  function canBuyMoreCandy() {
    const amountToSpend = Math.random() * 100;
    let totalPrice = 0;
  
    for (let i = 0; i < boughtCandyPrices.length; i++) {
      totalPrice += boughtCandyPrices[i];
    }
  
    if (totalPrice < amountToSpend) {
      console.log("You can buy more, so please do!");
      return true;
    } else {
      console.log("Enough candy for you!");
      return false;
    }
  }
  
  addCandy("sweet", 3);
  addCandy("chocolate", 5);
  addCandy("toffee", 2);
  canBuyMoreCandy();
   
  
  
  
  
  
  
  
  
  
  
  
  
  
    
    
  
  
  