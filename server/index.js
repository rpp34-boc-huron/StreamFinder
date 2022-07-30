require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const moviesRoutes = require('../server/routes/movies.js');
const hoverRoutes = require('../server/routes/hoverCard.js');
const searchMoviesRoutes = require('../server/routes/searchMovies.js');
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');
const bodyParser = require('body-parser')


app.use(express.json());
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/movies', moviesRoutes);
app.use('/hover', hoverRoutes);
app.use('/search', searchMoviesRoutes);
app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(port, () => {
  console.log('Server listening on port: ', port);
});
