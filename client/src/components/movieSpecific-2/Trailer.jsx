import React, { useState, useEffect } from "react";

export default function Trailer({ movieId }) {
  const [isLoading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState('');
  const axios = require('axios');

  useEffect(() => {
    getTrailers();
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

  const trailerUri = `https://www.youtube.com/embed/`;

  return (
    <>
      <p></p>
      <iframe style={{height:450, width:690}} src={trailerUri + trailerKey} />
    </>
  );
}