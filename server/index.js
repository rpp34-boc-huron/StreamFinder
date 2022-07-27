require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const moviesRoutes = require('../server/routes/movies.js');
const hoverRoutes = require('../server/routes/hoverCard.js');
const searchMoviesRoutes = require('../server/routes/searchMovies.js');
// const {searchMovies} = require('../server/controllers/searchMoviesController.js')
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

app.use(express.json());
app.use(express.static(publicPath));

app.use('/movies', moviesRoutes);
app.use('/hover', hoverRoutes);
app.use('/search', searchMoviesRoutes);
app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

// app.get('/search/movies/:keywords', (req, res) => {
//   let keywords = req.params.keywords;
//   searchMovies(keywords)
//     .then(result => {
//       res.status(200).send(result.data);
//     })
// });

// app.get('/search/movies/:keywords', (req, res) => {
//   res.redirect('/');
// });

app.listen(port, () => {
  console.log('Server listening on port: ', port);
});
