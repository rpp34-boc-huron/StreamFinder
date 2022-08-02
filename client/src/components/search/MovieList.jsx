import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import MovieResultCard from './MovieResultCard';

const MovieList = (props) => {
  const { listOfMovies } = props;
  return (
    <Grid container spacing={4}>
    {listOfMovies.map((movie) => (
      <MovieResultCard key={movie.id} movie={movie}/>
    ))}
  </Grid>
  );
}

export default MovieList;