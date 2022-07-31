const axios = require('axios');
const key = require('../token.js');
const API_KEY = process.env.API_KEY;

const summaryFinder =  (req, res) => {
    const { movieTitle } = req.params;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
     .then((apiRes) => {
         let id = apiRes.data.results[0].id;
         return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
             .then(apiRes => {
               res.status(200).send(apiRes.data);
             })
         })
         .catch (err => {
            res.status(500).send('summaryFinder error');
            console.error('summaryFinder', err);
         })
}
const posterFinder = (req, res) => {
    const { movieTitle } = req.params;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
        .then((apiRes) => {
            let id = apiRes.data.results[0].id;
            axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`)
                .then(apiRes => {
                    let posterURL = apiRes.data.posters[0].file_path;
                    res.status(200).send(`https://image.tmdb.org/t/p/w500/${posterURL}`)
                })
            })
            .catch(err => {
                res.status(500).send('posterFinder error');
                console.error('posterFinder', err);
            });
}

const providersFinder = (req, res) => {
    const { movieTitle } = req.params;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieTitle}`)
        .then((apiRes) => {
            let id = apiRes.data.results[1].id;
            return axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}`)
                .then(apiRes => {
                    let providers = apiRes.data.results.US.flatrate;
                    res.status(200).send(providers);
                })
            })
            .catch(err => {
                res.status(500).send('providersFinder error');
                console.error('providersFinder', err);
            });
}

module.exports = {
    summaryFinder, posterFinder, providersFinder};



//https://image.tmdb.org/t/p/w500/