const axios = require('axios');
const API_KEY = process.env.API_KEY;
const uri = 'https://api.themoviedb.org/3/movie';

const searchTrailers = async (req, res) => {
  try {
    const { movieId } = req.params;
    const apiRes = await axios.get(`${uri}/${movieId}/videos`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US'
      }
    });
    // const trailerKeys = apiRes.data.results.map(trailer => trailer.key);
    // res.status(200).send(trailerKeys);
    const trailerKey = apiRes.data.results[0].key;
    res.status(200).send(trailerKey);
  } catch (err) {
    res.status(500).send('get trailer error');
    console.error('get trailer error', err);
  }
}

const searchRecommendations = async (req, res) => {
  try {
    const { movieId } = req.params;
    const apiRes = await axios.get(`${uri}/${movieId}/recommendations`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US'
      }
    });
    const { results } = apiRes.data;
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send('get recommendations error');
    console.error('get recommendations error', err);
  }
}

module.exports = {
  searchTrailers,
  searchRecommendations
}