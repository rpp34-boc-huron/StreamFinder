const express = require('express');
const router = express.Router();

const { addList, addFavorites, getMovieInfo } = require('../controllers/hoverCardController')
//route to grab movie data
router.get('/details/:id', getMovieInfo)
//route to post to favorites
router.post('/favorites', addFavorites)
//route to post to watch list
router.post('/list', addList)
//route to post to watch list
//**not sure why this was added? */
// router.post('/', addFavorites)


//route to post to favorites
// router.post('/', addList)

module.exports = router;
