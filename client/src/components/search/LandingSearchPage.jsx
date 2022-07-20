import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieList from './MovieList';

// const LandingSearchPage = (props) => {
//   const {state} = useLocation();
//   const { keywords, data } = state;
//   return (
//     <div>
//       <Navbar />
//       This is a landing search page
//       <MovieList listOfMovies={data.results} />
//     </div>
//   );
// }


const LandingSearchPage = (props) => {
  return (
    <div>
      <MovieList listOfMovies={props.listOfMovies.results} />
    </div>
  );
}

export default LandingSearchPage;
