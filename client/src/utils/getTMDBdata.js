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

const getComedyMovieData = (cb) => {
  axios('/movies/comedy')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getDocumentaryMovieData = (cb) => {
  axios('/movies/documentary')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getDramaMovieData = (cb) => {
  axios('/movies/drama')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getSciFiMovieData = (cb) => {
  axios('/movies/scifi')
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getMysteryMovieData = (cb) => {
  axios('/movies/mystery')
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
  try {
    const response = await axios.post('/hover/favorites', {
      userID: userID,
      movieID: id
    })
    console.log(response)
  }
  catch (error){
    console.log(error)
  }
}

const addToList = async (userID, id) => {
  try {
    const response = await axios.post('/hover/list', {
      userID: userID,
      movieID: id
    })
    console.log(response)
  }
  catch (error){
    console.log(error)
  }
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

const getFavoritesMovieData = (cb, user) => {
  axios.get(`/movies/${user}/favorites`)
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};

const getWatchlistMovieData = (cb, user) => {
  axios.get(`/movies/${user}/watchlist`)
  .then(data => {
    cb(null, data);
  })
  .catch(err => {
    cb(err);
  })
};


export {
  addToList,
  addToFavorites,
  getMovieDetails,
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData,
  getSearchMovieResultsData,
  getFavoritesMovieData,
  getWatchlistMovieData,
  getComedyMovieData,
  getDocumentaryMovieData,
  getDramaMovieData,
  getSciFiMovieData,
  getMysteryMovieData
 };
