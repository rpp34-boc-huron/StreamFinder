const express = require('express');
const router = express.Router();

const { searchMovies } = require('../controllers/searchMoviesController.js');

//route to search movie
router.get('/movies/:keywords/:page', searchMovies);

module.exports = router;