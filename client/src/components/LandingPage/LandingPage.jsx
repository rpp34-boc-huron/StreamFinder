import React from 'react';
import MovieCarousel from './MovieCarousel.jsx';
import {
  getTrendingMovieData,
  getHorrorMovieData,
  getActionMovieData,
  getFavoritesMovieData,
  getMysteryMovieData,
  getComedyMovieData,
  getDocumentaryMovieData,
  getDramaMovieData,
  getSciFiMovieData
} from '../../utils/getTMDBdata.js';

const LandingPage = (props) => {
  const { handleClick } = props
  return (
    <>
      <MovieCarousel header={'Watch List'} apiMethod={getFavoritesMovieData} user={'sase'}/>
      <MovieCarousel header={'My Favorites'} apiMethod={getFavoritesMovieData} user={'sase'}/>
      <MovieCarousel header={'Trending'} apiMethod={getTrendingMovieData} />
      <MovieCarousel header={'Horror'} apiMethod={getHorrorMovieData} />
      <MovieCarousel header={'Action'} apiMethod={getActionMovieData} />
      <MovieCarousel header={'Comedy'} apiMethod={getComedyMovieData} />
      <MovieCarousel header={'Documentary'} apiMethod={getDocumentaryMovieData} />
      <MovieCarousel header={'Drama'} apiMethod={getDramaMovieData} />
      <MovieCarousel header={'Science Fiction'} apiMethod={getSciFiMovieData} />
      <MovieCarousel header={'Mystery'} apiMethod={getMysteryMovieData} />
    </>

  )
}

export default LandingPage;