import React from 'react';
import MovieCarousel from './MovieCarousel.jsx';
import {
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData
} from '../../utils/getTMDBdata.js';

const LandingPage = (props) => {
  const { handleClick } = props
  return (
    <>
      <MovieCarousel header={'Trending'} apiMethod={getTrendingMovieData} handleClick={handleClick}/>
      <MovieCarousel header={'Horror'} apiMethod={getHorrorMovieData} handleClick={handleClick}/>
      <MovieCarousel header={'Action'} apiMethod={getActionMovieData} handleClick={handleClick}/>
    </>

  )
}

export default LandingPage;