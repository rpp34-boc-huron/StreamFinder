const { addListModel, addFavoritesModel } = require('../../database/models/hoverCardDBModel')
const axios = require('axios');
// const API_KEY = process.env.API_KEY;
const API_KEY = require('../token').key;



const getMovieInfo = async (req, res) => {
  const id = req.params.id
          try {
            const {data:response} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`) //use data destructuring to get data from the promise object
            res.json(response)
          }
          catch (error) {
            console.log(error);
          }
}

const addList = (req, res) => {

  res.status(201).send('addList route is working')
}
const addFavorites = (req, res) => {
  res.status(201).send('addFavorites route is working')
}


module.exports = {
  addList,
  addFavorites,
  getMovieInfo
}