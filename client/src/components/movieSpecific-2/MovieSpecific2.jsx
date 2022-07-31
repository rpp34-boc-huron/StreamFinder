import React, { useState, useEffect } from 'react';
import RecomList from './RecomList';
import ScrollableTabsButtonAuto from './TrailerList';
const axios = require('axios');

export default function MovieSpecific2 ({ movieId, handleClick }) {
  const [isLoading, setLoading] = useState(true);
  // const [movieId, setMovieId] = useState(238);
  const [trailerKey, setTrailerKey] = useState('');
  const [trailerKeys, setTrailerKeyS] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getTrailers();
    getRecommendations()
  }, [movieId]);

  const getTrailers = async () => {
    try {
      const { data } = await axios.get(`/trailers/${movieId}`);
      setTrailerKey(data);
    } catch (err) {
      console.error('get trailers error', err);
    }
    setLoading(false);
  };

  const getRecommendations = async () => {
    try {
      const { data } = await axios.get(`/recommendations/${movieId}`);
      setRecommendations(data);
    } catch (err) {
      console.error('get recommendations error', err);
    }
    setLoading(false);
  };

  const trailerUri = `https://www.youtube.com/embed/`;

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const movieId = e.target.id;
  //   setMovieId(movieId);
  // }

  return (
    <>
    {/* <ScrollableTabsButtonAuto /> */}
    <iframe src={trailerUri + trailerKey} />
    <RecomList recommendations={recommendations} handleClick={handleClick}/>
    </>
  );
}
