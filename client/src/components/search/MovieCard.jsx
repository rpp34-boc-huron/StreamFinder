import React, { useState, useEffect } from 'react';

const MovieCard = (props) => {
  // console.log(props.movie.id)
  let imageUrl = `https://www.themoviedb.org/t/p/w185${props.movie.poster_path}`;
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <a>
        <img className="image" src={imageUrl} alt={props.movie.title}></img>
        </a>
      </div>
      <div className="movie-details">
        <div className="wrapper">
          <div className="title">
            <a className="movie-title">{props.movie.title}</a>
            <span className="release-date">{props.movie.release_date}</span>
          </div>
          <div className="overview">
            <p>{props.movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;