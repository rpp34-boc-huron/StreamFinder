import React from 'react';

const MovieCard = ({ moviePoster }) => {
  return (
    <div className="movie-item">
      <img src={moviePoster}/>
    </div>
  )
}

export default MovieCard;