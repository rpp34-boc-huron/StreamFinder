import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

// import MovieCard from '../LandingPage/MovieCard';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.listOfMovies.map(movie => (
         <MovieCard key={movie.id} movie={movie} />
      ))}
      <div className="pagination-wrapper">1,2,3</div>
    </div>
  );
}

export default MovieList;