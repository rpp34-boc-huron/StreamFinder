const axios = require('axios');
// require('dotenv').config()
const API_KEY = process.env.API_KEY;
const { User } = require('../../database/index.js')
const getMovieInfo = async (req, res) => {
  const id = req.params.id
      try {
        const {data:movieInfo} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`) //use data destructuring to get data from the promise object
        const {data:streaming} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}&language=en-US`)
        res.json({
          movieInfo: movieInfo,
          streaming: streaming
        })
        }
        catch (error) {
        console.log(error);
      }
} //

const addList = (req, res) => {
  console.log(req.body)
  const movieObj =  req.body;
  const username = movieObj.username;
  User.updateList(username, 'watchList', movieObj, (err, resultCode)=>{
    res.status(201).send(resultCode)
  })
}
const addFavorites = (req, res) => {
  const movieObj =  req.body;
  const username = movieObj.username;
  User.updateList(username, 'favorites', movieObj, (err, resultCode)=>{
    res.status(201).send(resultCode)
  })
}


module.exports = {
  addList,
  addFavorites,
  getMovieInfo
}

