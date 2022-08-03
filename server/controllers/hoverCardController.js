const axios = require('axios');
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
}

const addList = (req, res) => {
  const movieObj =  {
    'image': 'test insert watchList',
    'id': '99999'
  };
  User.updateList('sase', 'watchList', movieObj, (err, resultCode)=>{
    res.status(201).send(resultCode)
  })
}
const addFavorites = (req, res) => {
  const movieObj =  {
    'image': 'test insert favorites',
    'id': '199999'
  };
  User.updateList('sase', 'favorites', movieObj, (err, resultCode)=>{
    res.status(201).send(resultCode)
  })
}


module.exports = {
  addList,
  addFavorites,
  getMovieInfo
}

