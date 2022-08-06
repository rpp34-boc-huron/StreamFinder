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
const cookieParser = require('cookie-parser');
const auth = require('./auth/login.js');


app.use(express.json());
app.use(express.static(publicPath));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(cookieParser());

// app.use('/api/auth', require('./routes/register'));
// app.use('/api/auth', require('./routes/login'));
app.use('/movies', moviesRoutes);

app.use('/hover', auth.auth, hoverRoutes);
app.use('/search', searchMoviesRoutes);
app.use('/favorites',hoverRoutes);
app.use('/list', hoverRoutes)
app.use('/details/:movieId',hoverRoutes)

//------------------movie-specific------------------//
app.get('/poster/:movieId', posterFinder);
app.get('/summary/:movieId', summaryFinder);
app.get('/providers/:movieId', providersFinder);
app.get('/trailers/:movieId', searchTrailers);
app.get('/recommendations/:movieId', searchRecommendations);
//------------------movie-specific------------------//


// SASE AUTH TESTS
app.post('/sase/login', auth.login);
app.post('/sase/signup', auth.signup);
app.get('/sase/signout/', auth.signout);


// Profile
app.post('/user/profile/username', auth.auth, userController.getUserProfile);
app.post('/user/profileUrl', auth.auth, userController.saveProfilePicture);
app.post('/user/service', auth.auth, userController.updatePofileArr);
app.post('/user/password/reset', auth.auth, userController.resetPassword);
app.post('/user/aboutMe', auth.updateSession, auth.auth, userController.saveProfileData);
app.post('/user/friends', auth.auth, userController.addFriend);
app.post('/friend/:name', auth.auth, userController.getFriend);
app.post('/friends/:query', auth.auth, userController.getQueriedFriends);


app.listen(port, () => {
  console.log('Server listening on port: ', port);
});

