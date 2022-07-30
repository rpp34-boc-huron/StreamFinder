const axios = require('axios');
const key = require('../token.js');
// const API_KEY = process.env.API_KEY;
const summaryFinder =  (title) => {
       return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${title}`)
        .then((res) => {
            let id = res.data.results[0].id;
            return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.key}`)
                .then(res => {
                  return res.data
                })
            })
}
const posterFinder = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${title}`)
        .then((res) => {
            let id = res.data.results[0].id;
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key.key}`)
                .then(res => {
                    let posterURL = res.data.posters[0].file_path;
                    console.log(posterURL)
                    return `https://image.tmdb.org/t/p/w500/${posterURL}`
                })
            })
}

const providerFinder = (title) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${title}`)
        .then((res) => {
            let id = res.data.results[1].id;
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${key.key}`)
                .then(res => {
                    let providers = res.data.results.US.flatrate;
                    console.log(providers,'herererere')
                    return providers
                })
            })
}

module.exports = {
    summaryFinder, posterFinder, providerFinder};



//https://image.tmdb.org/t/p/w500/