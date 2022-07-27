import axios from 'axios';

const getTrendingMovieData = (cb) => {
  axios('/movies/trending')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getHorrorMovieData = (cb) => {
  axios('/movies/horror')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getActionMovieData = (cb) => {
  axios('/movies/action')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getSearchResultsData = (cb) => {
  axios('/search/movies')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};
// console.log('*', typeof getHorrorMovieData)
export {getTrendingMovieData, getHorrorMovieData, getActionMovieData, getSearchResultsData};