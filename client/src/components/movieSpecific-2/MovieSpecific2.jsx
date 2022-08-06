import React, { useState, useEffect } from 'react';
import RecomList from './RecomList';
const axios = require('axios');

export default function MovieSpecific2 ({ movieId, handleClick }) {
  const [isLoading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getRecommendations()
  }, [movieId]);

  const getRecommendations = async () => {
    try {
      const { data } = await axios.get(`/recommendations/${movieId}`);
      setRecommendations(data);
    } catch (err) {
      console.error('get recommendations error', err);
    }
    setLoading(false);
  };

  return (
    <>
    <RecomList
      recommendations={recommendations}
      handleClick={handleClick}/>
    </>
  );
}
