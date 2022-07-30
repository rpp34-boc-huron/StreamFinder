const { addListModel, addFavoritesModel } = require('../../database/models/hoverCardDBModel')
const axios = require('axios');
const API_KEY = process.env.API_KEY;



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
}

const addList = (req, res) => {
  addListModel(req.body)
  res.status(201).send('addList route is working')
}
const addFavorites = (req, res) => {
  addFavoritesModel(req.body)
  res.status(201).send('addFavorites route is working')
}


module.exports = {
  addList,
  addFavorites,
  getMovieInfo
}

