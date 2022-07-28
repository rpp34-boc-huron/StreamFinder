import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import MovieList from './MovieList';

import { getSearchMovieResultsData } from '../../utils/getTMDBdata.js';
import MovieCarousel from '../LandingPage/MovieCarousel.jsx';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card, Grid } from '@mui/material';

const LandingSearchPage = (props) => {
  console.log('listOfMovies => ', props.listOfMovies)
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
