console.log("hello world !!")


//1.1. Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = [];

const doubleOfOddNumber = numbers.filter(newNumbers => (newNumbers % 2 !== 0)).map(newNumbers => newNumbers * 2)

console.log(doubleOfOddNumber);

console.log("The doubled numbers are", newNumbers); // [2, 6]


// Codewars links:
// 8 kyu To square(root) or not to square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
// 8 kyu Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript


//1.3. Working with movies


const movies = [{"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
{"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
{"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},
{"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},
{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
{"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},
{"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},
{"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},
{"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},
{"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},
{"title": "10 Years","year": 2011,"rating": 6.1,"votes": 20790,"running_times": 6000},
{"title": "10,000 BC","year": 2008,"rating": 5.1,"votes": 114750,"running_times": 6540},
{"title": "100 Feet","year": 2008,"rating": 5.5,"votes": 10979,"running_times": 6240},
{"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},
 {"title": "13","year": 2010,"rating": 6.1,"votes": 36623,"running_times": 5460},
 {"title": "13 Going on 30","year": 2004,"rating": 6.1,"votes": 134434,"running_times": 5880},
 {"title": "13 Hours","year": 2016,"rating": 7.3,"votes": 85771,"running_times": 8640},
 {"title": "13 Sins","year": 2014,"rating": 6.3,"votes": 26738,"running_times": 5580},
 {"title": "13th","year": 2016,"rating": 8.2,"votes": 15188,"running_times": 6000},
 {"title": "1408","year": 2007,"rating": 6.8,"votes": 228738,"running_times": 6840},
 {"title": "Bang Bang You're Dead","year": 2002,"rating": 7.9,"votes": 11636,"running_times": 5580},
 {"title": "Bangkok Dangerous","year": 2008,"rating": 5.4,"votes": 50670,"running_times": 5940},
 {"title": "Banlieue 13: Ultimatum","year": 2009,"rating": 6.5,"votes": 39420,"running_times": 6060},
 {"title": "Barb Wire","year": 1996,"rating": 3.2,"votes": 21839,"running_times": 6000},
 {"title": "Barbarella","year": 1968,"rating": 5.9,"votes": 26937,"running_times": 5880},
 {"title": "Barbershop","year": 2002,"rating": 6.3,"votes": 24682,"running_times": 6120},
 {"title": "Barbershop 2: Back in Business","year": 2004,"rating": 5.7,"votes": 11461,"running_times": 6360 }];

//Create an array of movies containing the movies with a short title (you define what short means)

const shortMovieTitle = movies.filter((movie) => movie.title.length < 10);

console.log(shortMovieTitle);

//Create an array of movie titles with long movie titles

const longMovieTitle = movies.filter((movie) => movie.title.length > 10);

console.log(longMovieTitle);

//Count the number of movies made between 1980-1989 (including both the years)

const startYear = 1980;
const endYear = 1989;

const moviesBetween1980And1989 = movies.filter((movie) => movie.year >= startYear && movie.year <= endYear );

console.log(moviesBetween1980And1989);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)


const moviesWithTag = movies.map((movie) => ({ ...movie, tag: movie.rating >= 7 ? "Good" : movie.rating >= 4 ? "Average" : "Bad",}));
  
console.log(moviesWithTag);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const higherRatedMovies = movies.filter((movie) => movie.rating > 6).map((movie) => movie.rating);

console.log(higherRatedMovies);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
//So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

const moviesWithTheseWords = movies.filter((movie) => movie.title.includes( "Bangkok") || movie.title.includes( "Surfer") || movie.title.includes( "Alien")|| movie.title.includes(  "Benjamin") );

console.log(moviesWithTheseWords); 

//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. 
//Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

function duplicateWord(title) {
    const words = title.split(" ");
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
  }
const movieWithDuplicateWord = movies.filter((movie) => duplicateWord(movie.title));

console.log(movieWithDuplicateWord);