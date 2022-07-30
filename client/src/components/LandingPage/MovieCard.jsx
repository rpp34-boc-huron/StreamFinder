import React, { useState } from 'react';
import HoverCard from '../hoverCard/hoverCard.jsx';

const MovieCard = ({ moviePoster, movieId }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log('mouse over!');
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    console.log('mouse out!');
  };

  return (
    <div className="movie-item" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {!isHovering && <img src={moviePoster}/> }
      {isHovering && <HoverCard movieId={movieId}/>}
    </div>
  )
}

export default MovieCard;