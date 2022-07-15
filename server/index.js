require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require("axios");
const app = express();
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

const apiToken = require('../apiToken.js');
const api = 'https://api.themoviedb.org/3';


app.use(express.json());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});


app.get('/search/movies/:keywords', (req, res) => {
  let keywords = req.params.keywords;
  let url = `${api}/search/movie?api_key=${apiToken.TOKEN}&query=${keywords}&page=1`;
  axios.get(url)
    .then(result => {
      res.status(200).send(result.data);
    })
});

app.get('/search/movies/:keywords', (req, res) => {
  res.redirect('/');
});


app.listen(port, () => {
  console.log('Server listening on port: ', port);
});