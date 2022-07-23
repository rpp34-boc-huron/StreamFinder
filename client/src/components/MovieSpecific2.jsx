import React, { useState, useEffect } from 'react';
const axios = require('axios');
import Recommendationslist from './RecomendationsList';

const MovieSpecific2 = () => {
  const [isLoading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState(550);
  const [trailerKey, setTrailerKey] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getTrailer();
    getRecommendations()
  }, [movieId]);

  const getTrailer = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/trailer/${movieId}`);
      setTrailerKey(data);
    } catch (err) {
      console.error('get trailer error', err);
    }
    setLoading(false);
  };

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/recommendations/${movieId}`);
      setRecommendations(data);
    } catch (err) {
      console.error('get recommendations error', err);
    }
    setLoading(false);
  };

  const trailerUri = `https://www.youtube.com/embed/`;

  const handleClick = (e) => {
    e.preventDefault();
    const movieId = e.target.id;
    setMovieId(movieId);
  }

  return (
    <>
    <p>MovieSpecific2</p>
    <iframe src={trailerUri + trailerKey} />
    <Recommendationslist recommendations={recommendations} handleClick={handleClick} />
    </>
  );
}

export default MovieSpecific2;