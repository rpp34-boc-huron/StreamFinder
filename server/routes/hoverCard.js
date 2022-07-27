const express = require('express');
const router = express.Router();

const { addList, addFavorites, getMovieInfo } = require('../controllers/hoverCardController')

//route to grab movie data
router.get('/details/:id', getMovieInfo)
//route to post to watch list



//route to post to favorites


module.exports = router;