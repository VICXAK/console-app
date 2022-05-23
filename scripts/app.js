/* Create variable numberOfFilms */
// let numberOfFilms;

/*  Add functions  */
// function start() {
//    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//    }
// }

// start();

// /* Object personalMovieDB */

const personalMovieDB = {
  count: null,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
  let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
       numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
     personalMovieDB.count = numberOfFilms;
     return numberOfFilms;
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const lastViewed = prompt('Один из последний просмотренных фильмов?', '');
      const rate = prompt('На сколько оцените его?', '');
      if (lastViewed !== '' && rate !== '' && lastViewed !== null && rate !== null && lastViewed.length <= 50) {
        personalMovieDB.movies[lastViewed] = rate;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
     if (personalMovieDB.count < 10) {
       alert('Просмотрено довольно мало фильмов');
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
       alert('Вы классический зритель!');
     } else if (personalMovieDB.count >= 30) {
       alert('Вы киноман!');
     } else {
       alert('Error');
     }
  },
  showMyDB: function(hidden) {
     if (hidden) {
       console.log(personalMovieDB);
     }
  },
  toggleVisibleMyDB: function() {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    }
    else {
      personalMovieDB.privat = false;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
     let getGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (getGenres !== null && getGenres !== '') {
        personalMovieDB.genres[i - 1] = getGenres;
      }
      else {
        i--;
      }
    }
  },
  displayMsg: function(arrGenres) {
    arrGenres.forEach(function (el, i, arr) {
      console.log(`Любимый жанр #${i + 1} - это ${el}`);
    });
  }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(); 
personalMovieDB.displayMsg(personalMovieDB.genres);


// console.log(personalMovieDB);








// // Condition with answer for users



// /* Check property privat */
// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// /* Create function writeYourGenres */

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, 'horror');
//   }
// }
// writeYourGenres();