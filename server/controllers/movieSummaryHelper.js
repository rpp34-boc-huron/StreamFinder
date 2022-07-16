const axios = require('axios');
const key = require('../token.js');
const summaryFinder =  (title) => {
       return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${title}`)
        .then((res) => {
            // console.log(res.data,'sfsffff')
            let id = res.data.results[0].id;
            // console.log(id, 'sfsfs')
            return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.key}`)
                .then(res => {
                    // console.log(res.data.overview,'bfbf')
                  return res.data.overview
                })
            })
}
const posterFinder = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${title}`)
        .then((res) => {
            let id = res.data.results[1].id;
            return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.key}`)
                .then(res => {
                    let posterURL = res.data.backdrop_path;
                //   return axios.get(`https://image.tmdb.org/t/p/w500/${posterURL}`)
                //   .then(res => {
                //     console.log(res)
                //     return res;
                //   })
                    return `https://image.tmdb.org/t/p/w500/${posterURL}`
                })
            })
}
module.exports = {
    summaryFinder, posterFinder};

//    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.key}`, (req, res) => {
//     console.log(res, 'ssss')
//     return res.overview;
// })

//https://image.tmdb.org/t/p/w500/