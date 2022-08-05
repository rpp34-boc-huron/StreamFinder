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
const bodyParser = require('body-parser');
const userController = require('./controllers/profile.js');


// app.use(cors())
app.use(express.json());
app.use(express.static(publicPath));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));

app.use('/api/auth', require('./routes/register'));
app.use('/api/auth', require('./routes/login'));
app.use('/movies', moviesRoutes);
app.use('/hover', hoverRoutes);
app.use('/search', searchMoviesRoutes);
app.use('/favorites',hoverRoutes);
app.use('/list', hoverRoutes)
app.use('/details/:movieId',hoverRoutes)

// Profile
app.get('/user/profile/:username', userController.getUserProfile);
app.post('/user/profileUrl', userController.saveProfilePicture);
app.post('/user/service', userController.updatePofileArr);
app.post('/user/password/reset', userController.resetPassword);
app.post('/user/aboutMe', userController.saveProfileData);
// app.post('/user/friends', userController.addFriend);

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

