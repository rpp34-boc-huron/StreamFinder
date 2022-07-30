import React from 'react';
import MovieCarousel from './MovieCarousel.jsx';
import {
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData
} from '../../utils/getTMDBdata.js';

const LandingPage = () => {
  return (
    <>
      <MovieCarousel header={'Trending'} apiMethod={getTrendingMovieData} />
      <MovieCarousel header={'Horror'} apiMethod={getHorrorMovieData} />
      <MovieCarousel header={'Action'} apiMethod={getActionMovieData} />
    </>

  )
}

export default LandingPage;