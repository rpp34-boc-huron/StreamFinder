// const axios = require('axios');
// const api = 'https://api.themoviedb.org/3';
// const apiToken = require('../../apiToken.js');
// const url = `${api}/search/movie?api_key=${apiToken.TOKEN}`;

// const searchMovie = (keywords) => {
//   return axios.get(`${url}&query=${keywords}&page=1`)
// };

// module.exports = {
//   searchMovie
// }

const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
// const API_KEY = process.env.API_KEY;
const API_KEY = require('../../apiToken.js').TOKEN;

router.get('/search', (req, res) => {
  let keywords = req.params.keywords;
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keywords}&page=1`)
  .then(response => {
    console.log('search results ===>',response.data)
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})
module.exports = router;
