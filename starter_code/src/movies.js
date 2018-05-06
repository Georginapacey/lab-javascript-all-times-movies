/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

  function turnHoursToMinutes(movies) {
  
    var allMinutes = movies.map(function(movie) {
      movie = Object.assign({}, movie);
      var durationSplit = movie.duration.split(' ');
      var hoursToMin = 0;
      var newMin = 0;
  
      if (durationSplit[0].indexOf("h") !=-1){
        hoursToMin = Number(durationSplit[0].replace("h",""))*60;
      } else {
        hoursToMin = Number(durationSplit[0].replace("min",""));
      }
  
      if (durationSplit[1]){
        newMin = Number(durationSplit[1].replace("min",""));
      }
  
      var totalMin = hoursToMin + newMin;
      
      movie.duration = totalMin;
      return movie;
  
    });
  
    console.log(allMinutes)
  
  }
  
  turnHoursToMinutes(movies)
  

// Get the average of all rates with 2 decimals 

function ratesAverage() {
    var rates = movies.reduce(function(rates, movie) {
      return rates + Number(movie.rate);
    }, 0);
    //in one late we calculate average and round to two decimals
    return Math.round((rates / movies.length) * 100) / 100;
  
  }
  
  ratesAverage();

// Get the average of Drama Movies

function dramaMoviesRate() {
    var dramaMovies = movies.filter(function(movie){
      return movie.genre.indexOf("Drama") !== -1
    })
    if (dramaMovies.length !== 0) {
      return ratesAverage(dramaMovies);
    }
  
  }
  
dramaMoviesRate();


// Order by time duration, in growing order

function orderByDuration() {
    var newMovies = turnHoursToMinutes(movies);
  
    var moviesByDuration = newMovies.sort(function(movie1, movie2){
  
      // first try to sort by duration and if not (if it's 0), sort by alphabet, magic!
      return movie1.duration - movie2.duration || movie1.title.localeCompare(movie2.title);    
      
    })
  
    return moviesByDuration;
  
  }
  
orderByDuration();


// How many movies did STEVEN SPIELBERG

function howManyMovies() {

    moviesSpielberg = movies.filter(function(movie){
      return movie.director == "Steven Spielberg";
    });
    return moviesSpielberg;
  }
  
  howManyMovies();


// Order by title and print the first 20 titles
function orderAlphabetically() {
    var moviesAlph = movies.sort(function(movie1, movie2){
        return movie1.title.localeCompare(movie2.title);
    }).slice(0,20);
    return moviesAlph;
  }
  
  orderAlphabetically();


// Best yearly rate average
function bestYear() {
    var moviesByYear = movies.sort(function(movie1, movie2){
      return movie1.year - movie2.year;
    })
  
    return highestAvgYear(moviesByYear);
  
  }
  
  console.log(bestYear());
  
  
  function highestAvgYear(moviesByYear) {
  
    var firstYear = moviesByYear[0].year;
    var lastYear = moviesByYear[moviesByYear.length - 1].year;
    var moviesInYear = {};
    var highestAvg = 0;
    var ratesAvg = 0;
    var highestAvgYear;
  
  
    
    for (var i = firstYear; i <= lastYear; i++) {
      
      moviesInYear = moviesByYear.filter(function(movie){
        return movie.year == i;
      });
  
      if (moviesInYear.length > 0){
        ratesAvg = ratesAvgByYear(moviesInYear);
  
        //TODO solution for same high average for several years
  
        if (ratesAvg > highestAvg) {
          highestAvg = ratesAvg;
          highestAvgYear = i;
        } 
      }
      
  
    }
  
    return highestAvgYear;
  
  }
  