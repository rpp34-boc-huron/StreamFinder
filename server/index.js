require('dotenv').config();
require('../database/index.js');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const moviesRoutes = require('../server/routes/movies.js');
const hoverRoutes = require('../server/routes/hoverCard.js');
const searchMoviesRoutes = require('../server/routes/searchMovies.js');
const{ summaryFinder, posterFinder, providersFinder } = require('./controllers/movieSummaryHelper.js');
const { searchTrailers, searchRecommendations }= require('./controllers/movieSpecific2Controller')
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');
const bodyParser = require('body-parser')


// app.use(cors())
app.use(express.json());
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/auth', require('./routes/register'));
app.use('/api/auth', require('./routes/login'));
app.use('/movies', moviesRoutes);
app.use('/hover', hoverRoutes);
app.use('/search', searchMoviesRoutes);
app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});


//------------------movie-specific------------------//
app.get('/poster/:movieId', posterFinder);
app.get('/summary/:movieId', summaryFinder);
app.get('/providers/:movieId', providersFinder);
app.get('/trailers/:movieId', searchTrailers);
app.get('/recommendations/:movieId', searchRecommendations);
//------------------movie-specific------------------//


app.listen(port, () => {
  console.log('Server listening on port: ', port);
});

