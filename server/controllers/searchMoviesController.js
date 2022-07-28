const axios = require('axios');
// const API_KEY = process.env.API_KEY;
const API_KEY = require('../../apiToken.js').TOKEN;

// const searchMovies = (keywords) => {
//   return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keywords}&page=1`)
// };

const searchMovies = (req, res) => {
  const keywords = req.params.keywords;
  const page = req.params.page || 1;
  console.log('page --->', page)
  console.log('searchMovies KEYWORDS ===>', keywords);
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keywords}&page=${page}`)
  .then(response => {
    // console.log('search results ===>',response.data)
    return res.json(response.data);
  })
  .catch(err => {
    res.json('Search Movies Error',err)
  })
}

module.exports = {
  searchMovies
};
