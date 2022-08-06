const express = require('express');
const router = express.Router();

const { addList, addFavorites, getMovieInfo } = require('../controllers/hoverCardController')
const auth = require('../controllers/Auth');
//route to grab movie data
router.get('/details/:id', getMovieInfo)
//route to post to favorites
router.post('/favorites', addFavorites)
//route to post to watch list
router.post('/list', addList)
//route to post to watch list


module.exports = router;
