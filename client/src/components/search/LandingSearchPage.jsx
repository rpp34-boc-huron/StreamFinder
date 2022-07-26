import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
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
  console.log('listOfMovies => ', props.listOfMovies.results.length)

  return (
    <div>
      {
        props.listOfMovies.results.length > 0 ?
        <MovieList listOfMovies={props.listOfMovies.results} />
        :
        <p>Sorry, we couldn't find any results for your search.</p>
      }
    </div>
  );
}

export default LandingSearchPage;
