import axios from 'axios';

export const getTrendingMovieData = (cb) => {
  axios('https://api.themoviedb.org/3/trending/movie/day?api_key=2ac71823f7c353e5fc4aa330ad4a6497')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
}

export const getHorrorMovieData = (cb) => {
  axios('https://api.themoviedb.org/3/discover/movie?api_key=2ac71823f7c353e5fc4aa330ad4a6497&with_genres=27')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
}

export const getActionMovieData = (cb) => {
  axios('https://api.themoviedb.org/3/discover/movie?api_key=2ac71823f7c353e5fc4aa330ad4a6497&with_genres=28')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
}

