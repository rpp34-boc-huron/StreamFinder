import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import MovieList from './MovieList';
import MovieCarousel from '../LandingPage/MovieCarousel.jsx';

const LandingSearchPage = (props) => {
  // console.log('listOfMovies => ', props.listOfMovies)
  return (
    <div>
      {
        props.listOfMovies.length > 0 ?
        <MovieList listOfMovies={props.listOfMovies} />
        :
        <p>Sorry, we couldn't find any results for your search.</p>
      }
    </div>
  );
}

export default LandingSearchPage;
