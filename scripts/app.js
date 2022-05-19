/* Create variable numberOfFilms */
let numberOfFilms;

/*  Add functions  */
function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

// /* Object personalMovieDB */

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/* Questions for user */
// let a = prompt('Один из последний просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '5'),
//     c = prompt('Один из последний просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '5');


/* Function for loop */
function rememberMyFilms() {
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
}
rememberMyFilms();
/*------------------------------- Loop with do {} while()----------------- */
// let i = 0;
// do {
//   const lastViewed = prompt('Один из последний просмотренных фильмов?', '');
//   const rate = prompt('На сколько оцените его?', '');
//   if (lastViewed !== '' && rate !== '' && lastViewed !== null && rate !== null && lastViewed.length <= 50) {
//     personalMovieDB.movies[lastViewed] = rate;
//     console.log('done');
//   }
//   else {
//     console.log('error');
//     i--;
//   }
//   i++;
// }while(i < 2);
// /* Add users response */

/* ---------------------Loop with while(){}---------------------- */

// let i = 0;
// while (i < 2) {
//   const lastViewed = prompt('Один из последний просмотренных фильмов?', '');
//   const rate = prompt('На сколько оцените его?', '');
//   if (lastViewed !== '' && rate !== '' && lastViewed !== null && rate !== null && lastViewed.length <= 50) {
//     personalMovieDB.movies[lastViewed] = rate;
//     console.log('done');
//   } 
//   else {
//     console.log('error');
//     i--;
//   }
//   i++;
// }

// Condition with answer for users


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
  } else {
    alert('Error');
  }
}
detectPersonalLevel();


/* Check property privat */
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

/* Create function writeYourGenres */

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, 'horror');
  }
}
writeYourGenres();