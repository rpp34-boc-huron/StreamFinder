const axios = require('axios');
// const API_KEY = process.env.API_KEY;
const API_KEY = require('../../apiToken.js').TOKEN;

const searchMovies = (req, res) => {
  const keywords = req.params.keywords;
  const page = req.params.page || 1;
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keywords}&page=${page}`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(err => {
    res.status(500).send('Search Movies Error',err);
  })
}

module.exports = {
  searchMovies
};
