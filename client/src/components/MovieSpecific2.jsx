import React, { useState, useEffect } from 'react';
const axios = require('axios');

const MovieSpecific2 = () => {
  const [movieId, setMovieId] = useState(550);
  const [trailerKey, setTrailerKey] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`/trailer/${movieId}`)
      .then(res => setTrailerKey(res.data))
      .catch(err => console.error('get trailer error', err))
  });

  useEffect(() => {
    axios.get(`/recommendations/${movieId}`)
      .then(res => setRecommendations(res.data))
      .catch(err => console.error('get recommendations error', err))
  }, []);

  const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <>
    <p>MovieSpecific2</p>
    <iframe src={trailerUrl} />
    </>
  )
}

export default MovieSpecific2;