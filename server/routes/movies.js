const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const API_KEY = process.env.API_KEY;
const db = require('../controllers/getFavoritesAndWatchlistController.js');
// const API_KEY = require('../../apiToken.js').TOKEN;


router.get('/trending', (req, res) => {
  axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/horror', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/action', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/comedy', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/documentary', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/drama', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/scifi', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/mystery', (req, res) => {
  axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`)
  .then(response => {
    res.json(response.data);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/:user/favorites', (req, res) => {
  db.getUserData(req.params.user, 'favorites')
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err);
  })
})

router.get('/:user/watchlist', (req, res) => {
  db.getUserData(req.params.user, 'watchList')
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err);
  })
})

module.exports = router;