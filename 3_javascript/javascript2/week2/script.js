import { movies } from "./movies.js";

// Doubling of number

let numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter((n) => n % 2 !== 0).map((num) => num * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

// Working with movies

const shortMovies = movies.filter((movie) => movie.running_times <= 3000);
console.log("shortMovies", shortMovies);

const longMovies = movies.filter((movie) => movie.running_times >= 10000);
console.log("longMovies", longMovies);

const numberOfMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log("numberOfMovies", numberOfMovies);

const tags = movies.map((movie) => {
  let tag;
  if (movie.rating >= 7) tag = "good";
  if (movie.rating >= 4 && movie.rating < 7) tag = "average";
  else tag = "bad";
  return {
    tag,
  };
});

console.log("tags", tags);

const goodMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

console.log("goodMovies", goodMovies);

const moviesContainingKeywordsQuantity = movies.filter((movie) => {
  const titleToArray = movie.title.split(" ");
  const keywords = ["Surfer", "Alien", "Benjamin"];
  return keywords.some((keyword) => titleToArray.includes(keyword));
}).length;

console.log(
  "moviesContainingKeywordsQuantity",
  moviesContainingKeywordsQuantity
);

const movieTitlesWithRepeatingWords = movies.filter((movie) => {
  const titleToArray = movie.title.split(" ");
  return (
    titleToArray.filter((value, index, self) => self.indexOf(value) !== index)
      .length > 0
  );
});

console.log("movieTitlesWithRepeatingWords", movieTitlesWithRepeatingWords);
