require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');
const moviesRoutes = require('./routes/movies.js');
// const searchMovie= require('./controllers/searchMovieHelper.js').searchMovie;
const searchMovie= require('./controllers/searchMovieHelper.js');

app.use(express.json());
app.use(express.static(publicPath));

app.use('/movies', moviesRoutes);
app.use('/search', searchMovie);

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

// app.get('/search/movies/:keywords', (req, res) => {
//   let keywords = req.params.keywords;
//   searchMovie(keywords)
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
