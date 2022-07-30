require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios').default;
const cors = require('cors');
const { searchTrailers, searchRecommendations }= require('./controllers/movieSpecific2Controller')

const app = express();
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

app.use(express.json());
app.use(express.static(publicPath));
app.use(cors());

app.get('/trailers/:movieId', searchTrailers);
app.get('/recommendations/:movieId', searchRecommendations);

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(port, () => {
  console.log('Server listening on port: ', port);
});