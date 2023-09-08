// Flight booking fullname function

function getFullname(firstname, surname, useFormalName, isFemale) {
    if (firstname === "" || surname === "") {
        return "Please provide both firstname and surname"
    } else
        if (useFormalName) {
            if (isFemale) {
                return "Lady " + firstname + " " + surname;
            } else {
                return "Lord " + firstname + " " + surname;
            }
        } else {
            return firstname + " " + surname;
        }
}

let fullname1 = getFullname("Benjamin", "Hughes", true, false);
let fullname2 = getFullname("BenjaminA", "Button", true, true);

console.log(fullname1);
console.log(fullname2);
