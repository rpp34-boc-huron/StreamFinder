import axios from 'axios';

const getTrendingMovieData = (cb) => {
  axios('/movies/trending')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getHorrorMovieData = (cb) => {
  axios('/movies/horror')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getActionMovieData = (cb) => {
  axios('/movies/action')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getMovieDetails = async (id) => {
      try {
        const {data:response} = await axios.get(`/hover/details/${id}`)
         return response
      }
      catch (error) {
        console.log(error);
      }
}
const addToFavorites = async (userID, id) => {

}

const addToList = async (userID, id) => {

}


const getSearchMovieResultsData = async (keywords, page) => {
  page = page || 1;
    try {
      const {data:response} = await axios.get(`/search/movies/${keywords}/${page}`)
       return response;
    }
    catch (error) {
      console.log(error);
    }
};


// console.log('*', typeof getHorrorMovieData)
export {
  addToList,
  addToFavorites,
  getMovieDetails,
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData,
  getSearchMovieResultsData
 };
