require('dotenv').config();
const express = require('express');
const path = require('path');
const moviesRoutes = require('./routes/movies.js');
console.log(process.env);  //checking cd/ci .env

const app = express();
const port = process.env.port || 8080;
const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

app.use(express.json());
app.use(express.static(publicPath));

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(port, () => {
  console.log('Server listening on port: ', port);
});
