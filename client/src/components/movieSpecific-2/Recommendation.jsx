import React, { useState, useEffect } from 'react';

const Recommendation = ({ movieId, backdrop, title, handleClick }) => {
  return (
    <div className='recommendation'>
      <div className='movie_card'>
        <div className='item mini backdrop mini_card'>
          <div className='image_content'>
            <a href='' title={title} alt={title}>
              <img className='backdrop' src={backdrop} alt={title} id={movieId} onClick={handleClick}></img>
            </a>
          </div>
          <a className='title' href='' title={title} alt={title}>
            <p id={movieId} onClick={handleClick}>{title}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;