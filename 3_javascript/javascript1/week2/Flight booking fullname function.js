function getFullname(firstname, surname, useFormalName, gender) {
    if (useFormalName) {
        if (gender === "male") {
            return "Lord " + firstname + " " + surname;
        } else if (gender === "female") {
            return "Lady " + firstname + " " + surname;
        }
    }
    return firstname + " " + surname;
}
const fullName = getFullname("Benjamin", "Hughes", true, "female");
console.log(fullName);



   