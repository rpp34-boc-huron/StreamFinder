const axios = require('axios');
const api = 'https://api.themoviedb.org/3';
const apiToken = require('../../apiToken.js');
const url = `${api}/search/movie?api_key=${apiToken.TOKEN}`;

const searchMovie = (keywords) => {
  return axios.get(`${url}&query=${keywords}&page=1`)
};

module.exports = {
  searchMovie
}