"use strict";
let lastFilm,
  numberOfFilm,
  lastFilm2,
  rating,
  rating2,
  personalMovieDB = {};
personalMovieDB["movies"] = {};
personalMovieDB["actors"] = {};
personalMovieDB["genres"] = [];
personalMovieDB["private"] = false;
while (numberOfFilm == "" || numberOfFilm == null || numberOfFilm.length > 50) {
  numberOfFilm = prompt("Сколько фильмов вы уже посмотрели?");
}
personalMovieDB.count = numberOfFilm;
for (let i = 0; i < 2; i++) {
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
