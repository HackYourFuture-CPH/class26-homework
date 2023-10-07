//1.1. Doubling of number
let numbers = [1, 2, 3, 4];
let newNumbers = [];
const oddNumber = numbers.filter((number) => number % 2).map((x) => x * 2);
console.log(oddNumber);

///1.3. Working with movies
//addedn on movie js
//1.
const shortTitleName = movies.filter((shortName) => shortName.title.length < 3);
console.log(shortTitleName);

//2.
const shortTitleName2 = movies.filter((longName) => longName.title.length > 3);
console.log(shortTitleName2);
//3.
const numberOfMovies = movies
.filter((yearMovies) =>yearMovies.year >=1980)
.filter((yearMovies) =>yearMovies.year <=1989);

console.log(numberOfMovies);
//4.

const addTag = movies.map((movies) => {
    let tagValue = "";
    if(movies.rating >= 7){
        tagValue = "Good"
    } else if(movies.rating <= 7 && movies.rating >= 4 ){
        tagValue ="Average"
    } else {
        tagValue ="Bad"
    }
  return {
    ...movies,
    tag: tagValue,
  
  }
})
console.log(addTag);
//5

const ratedHigherSix = movies.filter((higherSix) => higherSix.rating > 6)
.map((higherSix) => higherSix)
console.log(ratedHigherSix);

//6

const totalNumberOfMovies = movies.filter((element) =>  element.title.includes("Benjamin") || element.title.includes("Surfer") || element.title.includes("Alien"));

console.log(totalNumberOfMovies) 

//7


const duplicatedWordMovies = movies
    .filter(movie => movie.title.split(" ").some((word, index, words) => words.indexOf(word) !== index))
    .map(movie => movie.title);

console.log(duplicatedWordMovies);

//8

const totalRating = movies.reduce((accumulator, movie) => {
  return accumulator + movie.rating;
}, 0);

const averageRating = totalRating / movies.length;

console.log(averageRating);

//9

const totalNumberOf = movies.reduce((accumulator, movie) => {
  return accumulator + movie.rating;
}, 0);

const  totalNumber= totalRating / movies.length;

console.log(totalNumber);

