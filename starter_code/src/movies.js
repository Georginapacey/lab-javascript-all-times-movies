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


// Order by title and print the first 20 titles


// Best yearly rate average
