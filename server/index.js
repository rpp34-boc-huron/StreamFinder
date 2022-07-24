require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios').default;
const cors = require('cors');

const app = express();
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

app.use(express.json());
app.use(express.static(publicPath));
app.use(cors());

//------------------movie-specific2------------------//
const uri = 'https://api.themoviedb.org/3/movie';

app.get('/trailers/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const apiRes = await axios.get(`${uri}/${movieId}/videos`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
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
});

app.get('/recommendations/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const apiRes = await axios.get(`${uri}/${movieId}/recommendations`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US'
      }
    });
    const { results } = apiRes.data;
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send('get recommendations error');
    console.error('get recommendations error', err);
  }
})

//------------------movie-specific2------------------//

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(port, () => {
  console.log('Server listening on port: ', port);
});