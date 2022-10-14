"use strict";
function start() {
  numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilm == "" || numberOfFilm == null || isNaN(numberOfFilm)) {
    numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

let numberOfFilm;

start();

let personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm, rating;
    while (lastFilm == "" || lastFilm == null || lastFilm > 50) {
      lastFilm = prompt("Фильм");
    }
    while (rating == "" || rating == null || rating > 50) {
      rating = prompt("Оцените");
    }
    personalMovieDB.movies[lastFilm] = rating;
    lastFilm = "";
    rating = "";
  }
}
rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectedPersonalLevel();

function showMyDB() {
  if (personalMovieDB.private == false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    personalMovieDB.genres[i] = genre;
  }
}
writeYourGenres();
