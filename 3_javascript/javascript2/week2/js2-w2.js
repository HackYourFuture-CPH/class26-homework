//Doubling of number//

let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers
  .map(number => {
    if (number % 2 !== 0) {
      return number * 2;
    }
  })
  .filter(number => number !== undefined);

console.log("The doubled numbers are", newNumbers); // [2, 6]



//Working with movies//

  const movies = [
    {"title": "The Good Lie", "year": 2014, "rating": 7.4, "running_time": 110},
    {"title": "The Good Neighbor", "year": 2016, "rating": 6.3, "running_time": 98},
    {"title": "The Good Son", "year": 1993, "rating": 6.4, "running_time": 87},
    {"title": "The Goods: Live Hard, Sell Hard", "year": 2009, "rating": 5.8, "running_time": 89},
    {"title": "The Great Mouse Detective", "year": 1986, "rating": 7.2, "running_time": 74},
    {"title": "The Great Muppet Caper", "year": 1981, "rating": 7.2, "running_time": 97},
    {"title": "The Great Outdoors", "year": 1988, "rating": 6.6, "running_time": 91},
    {"title": "The Great Raid", "year": 2005, "rating": 6.7, "running_time": 132},
    {"title": "The Great Train Robbery", "year": 1903, "rating": 7.3, "running_time": 11},
    {"title": "The Green Inferno", "year": 2013, "rating": 5.3, "running_time": 100},
    {"title": "The Good Shepherd", "year": 2006, "rating": 6.7, "running_time": 167},
    {"title": "The Goodbye Girl", "year": 1977, "rating": 7.4, "running_time": 111},
    {"title": "The Grand Budapest Hotel", "year": 2014, "rating": 8.1, "running_time": 99},
    {"title": "The Grand Seduction", "year": 2013, "rating": 7.0, "running_time": 113},
    {"title": "The Grapes of Wrath", "year": 1940, "rating": 8.1, "running_time": 129},
    {"title": "The Great Buck Howard", "year": 2008, "rating": 6.5, "running_time": 90},
    {"title": "The Great Debaters", "year": 2007, "rating": 7.6, "running_time": 126},
    {"title": "The Great Dictator", "year": 1940, "rating": 8.5, "running_time": 120},
    {"title": "The Great Escape", "year": 1963, "rating": 8.2, "running_time": 172},
    {"title": "The Great Gatsby", "year": 2013, "rating": 7.3, "running_time": 143},
    {"title": "Young Adam","year": 2003,"rating": 6.5,"votes": 12131,"running_times": 5880},
    {"title": "Young Adult","year": 2011,"rating": 6.3,"votes": 68568,"running_times": 5640},
    {"title": "Young Frankenstein","year": 1974,"rating": 8,"votes": 125087,"running_times": 6360},
    {"title": "Young Guns","year": 1988,"rating": 6.8,"votes": 46301,"running_times": 6420},
    {"title": "Young Guns II","year": 1990,"rating": 6.5,"votes": 26020,"running_times": 6240},
    {"title": "Young People Fucking","year": 2007,"rating": 6.3,"votes": 18254,"running_times": 5400},
    {"title": "Young Sherlock Holmes","year": 1985,"rating": 6.8,"votes": 16098,"running_times": 6540},
    {"title": "Youngblood","year": 1986,"rating": 6.1,"votes": 10495,"running_times": 6600},
    {"title": "Your Highness","year": 2011,"rating": 5.5,"votes": 89650,"running_times": 6120},
    {"title": "Your Sister's Sister","year": 2011,"rating": 6.7,"votes": 23443,"running_times": 5400},
    {"title": "Yours, Mine & Ours","year": 2005,"rating": 5.4,"votes": 23439,"running_times": 5280},
    {"title": "Youth","year": 2015,"rating": 7.3,"votes": 56877,"running_times": 7440},
    {"title": "Youth Without Youth","year": 2007,"rating": 6.3,"votes": 11953,"running_times": 7440},
    {"title": "Youth in Revolt","year": 2009,"rating": 6.5,"votes": 68119,"running_times": 5400},
    {"title": "Yume","year": 1990,"rating": 7.8,"votes": 19868,"running_times": 7140},
    {"title": "Z","year": 1969,"rating": 8.2,"votes": 19513,"running_times": 7620},
    {"title": "Z for Zachariah","year": 2015,"rating": 6,"votes": 22333,"running_times": 5880},
    {"title": "Zabriskie Point","year": 1970,"rating": 7.1,"votes": 12201,"running_times": 6780},
    {"title": "Zack and Miri Make a Porno","year": 2008,"rating": 6.6,"votes": 157803,"running_times": 6060},
    {"title": "Zardoz","year": 1974,"rating": 5.8,"votes": 16295,"running_times": 6300},
    {"title": "Zathura: A Space Adventure","year": 2005,"rating": 6.1,"votes": 75323,"running_times": 6060},
    {"title": "Zeitgeist: Moving Forward","year": 2011,"rating": 8.2,"votes": 16308,"running_times": 9660},
    {"title": "Zelig","year": 1983,"rating": 7.8,"votes": 34767,"running_times": 4740},
    {"title": "Zero Dark Thirty","year": 2012,"rating": 7.4,"votes": 233700,"running_times": 9420},
    {"title": "Zero Effect","year": 1998,"rating": 7,"votes": 12886,"running_times": 6960},
    {"title": "Zindagi Na Milegi Dobara","year": 2011,"rating": 8.1,"votes": 51369,"running_times": 9300},
    {"title": "Zivot je cudo","year": 2004,"rating": 7.7,"votes": 10794,"running_times": 9300},
    {"title": "Zodiac","year": 2007,"rating": 7.7,"votes": 349834,"running_times": 9720},
    {"title": "Zombeavers","year": 2014,"rating": 4.8,"votes": 13180,"running_times": 4620},
    {"title": "Zombi 2","year": 1979,"rating": 6.9,"votes": 21569,"running_times": 5640},
    {"title": "Zombie Strippers","year": 2008,"rating": 4.1,"votes": 16387,"running_times": 5640},
    {"title": "Zombieland","year": 2009,"rating": 7.7,"votes": 423925,"running_times": 5280},
    {"title": "Zookeeper","year": 2011,"rating": 5.2,"votes": 48679,"running_times": 6120},
    {"title": "Zoolander","year": 2001,"rating": 6.6,"votes": 217408,"running_times": 5400},
    {"title": "Zoolander 2","year": 2016,"rating": 4.7,"votes": 52589,"running_times": 6480},
    {"title": "Zoom","year": 2006,"rating": 4.3,"votes": 16260,"running_times": 5580},
    {"title": "Zootopia","year": 2016,"rating": 8,"votes": 326111,"running_times": 6480},
    {"title": "Zulu","year": 1964,"rating": 7.8,"votes": 31229,"running_times": 8280},
    {"title": "Zulu","year": 2013,"rating": 6.7,"votes": 15316,"running_times": 6600},
    {"title": "Zwartboek","year": 2006,"rating": 7.8,"votes": 64568,"running_times": 8700},
    {"title": "eXistenZ","year": 1999,"rating": 6.8,"votes": 82881,"running_times": 6900},
    {"title": "iBoy","year": 2017,"rating": 6,"votes": 12217,"running_times": 5400},
    {"title": "xXx","year": 2002,"rating": 5.8,"votes": 157358,"running_times": 7920},
    {"title": "xXx: Return of Xander Cage","year": 2017,"rating": 5.2,"votes": 63918,"running_times": 6420},
    {"title": "xXx: State of the Union","year": 2005,"rating": 4.4,"votes": 59449,"running_times": 6060},
    {"title": "¡Three Amigos!","year": 1986,"rating": 6.4,"votes": 58003,"running_times": 6240},
    {"title": "À bout de souffle","year": 1960,"rating": 7.9,"votes": 58379,"running_times": 5400},
    {"title": "Æon Flux","year": 2005,"rating": 5.5,"votes": 115131,"running_times": 5580},
    ];
  
  // 1. Create an array of movies with short titles (e.g., less than 10 characters).
  const shortTitleMovies = movies.filter(movie => movie.title.length < 10);
  console.log("Movies with Short Titles:", shortTitleMovies);
  
  // 2. Create an array of movie titles with long movie titles (e.g., 20 characters or more).
  const longTitleMovies = movies.filter(movie => movie.title.length >= 20).map(movie => movie.title);
  console.log("Movie Titles with Long Titles:", longTitleMovies);
  
  // 3. Count the number of movies made between 1980-1989 (inclusive).
  const movies1980s = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
  const count1980sMovies = movies1980s.length;
  console.log("Number of Movies Made in the 1980s:", count1980sMovies);
  
  // 4. Create a new array with a "tag" based on the rating.
  const taggedMovies = movies.map(movie => {
    if (movie.rating >= 7) {
      movie.tag = "Good";
    } else if (movie.rating >= 4 && movie.rating < 7) {
      movie.tag = "Average";
    } else {
      movie.tag = "Bad";
    }
    return movie;
  });
  console.log("Movies with Tags:", taggedMovies);
  
  // 5. Using chaining, filter and map movies for their ratings.
  const highRatedMovies = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
  console.log("High Rated Movies:", highRatedMovies);
  
  // 6. Count the total number of movies containing certain keywords (case insensitive).
  const keywords = ["Surfer", "Alien", "Benjamin"];
  const keywordCount = movies.reduce((count, movie) => {
    const title = movie.title.toLowerCase();
    keywords.forEach(keyword => {
      if (title.includes(keyword.toLowerCase())) {
        count++;
      }
    });
    return count;
  }, 0);
  console.log("Number of Movies with Keywords:", keywordCount);
  
  // 7. Create an array of movies with duplicated words in the title.
  const moviesWithDuplicates = movies.filter(movie => {
    const words = movie.title.split(' ');
    const uniqueWords = new Set(words);
    return words.length !== uniqueWords.size;
  });
  console.log("Movies with Duplicated Words in Title:", moviesWithDuplicates);
  
  // 8. Calculate the average rating of all movies (optional).
  const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
  const averageRating = totalRating / movies.length;
  console.log("Average Rating of All Movies:", averageRating);
  
  // 9. Count the total number of Good, Average, and Bad movies (optional).
  const ratingsCount = movies.reduce((count, movie) => {
    if (movie.tag === "Good") {
      count.goodMovies++;
    } else if (movie.tag === "Average") {
      count.averageMovies++;
    } else {
      count.badMovies++;
    }
    return count;
  }, { goodMovies: 0, averageMovies: 0, badMovies: 0 });
  console.log("Counts of Good, Average, and Bad Movies:", ratingsCount);
  






