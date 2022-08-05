import React, { useState } from 'react';
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
  getSciFiMovieData,
  getWatchlistMovieData
} from '../../utils/getTMDBdata.js';

const LandingPage = (props) => {
  const { handleClick } = props

  const [favorites, setFavorites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  return (
    <div className="movie-carousels">
      {favorites.length && <MovieCarousel header={'Watch List'} apiMethod={getWatchlistMovieData} user={'sase'} type={'watchlist'} setWatchList={setWatchList} favorites={favorites} watchlist={watchList}/>}
      {watchList.length && <MovieCarousel header={'My Favorites'} apiMethod={getFavoritesMovieData} user={'sase'} type={'favorites'}  setFavorites={setFavorites} favorites={favorites} watchlist={watchList}/>}
      <MovieCarousel header={'Trending'} apiMethod={getTrendingMovieData} favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Horror'} apiMethod={getHorrorMovieData} favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Action'} apiMethod={getActionMovieData} favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Comedy'} apiMethod={getComedyMovieData} favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Documentary'} apiMethod={getDocumentaryMovieData}favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Drama'} apiMethod={getDramaMovieData} favorites={favorites} watchlist={watchList} />
      <MovieCarousel header={'Science Fiction'} apiMethod={getSciFiMovieData} favorites={favorites} watchlist={watchList}/>
      <MovieCarousel header={'Mystery'} apiMethod={getMysteryMovieData} favorites={favorites} watchlist={watchList}/>
    </div>

  )
}

export default LandingPage;