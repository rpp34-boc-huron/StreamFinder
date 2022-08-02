import React from 'react';
import MovieCarousel from './MovieCarousel.jsx';
import {
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData,
  getFavoritesMovieData
} from '../../utils/getTMDBdata.js';

const LandingPage = () => {
  return (
    <>
      <MovieCarousel header={'Watch List'} apiMethod={getFavoritesMovieData} user={'sase'}/>
      <MovieCarousel header={'My Favorites'} apiMethod={getFavoritesMovieData} user={'sase'}/>
      <MovieCarousel header={'Trending'} apiMethod={getTrendingMovieData} />
      <MovieCarousel header={'Horror'} apiMethod={getHorrorMovieData} />
      <MovieCarousel header={'Action'} apiMethod={getActionMovieData} />
    </>

  )
}

export default LandingPage;