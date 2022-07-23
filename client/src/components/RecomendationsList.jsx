import React, { useState, useEffect } from 'react';
import Recommendation from './Recommendation';

const Recommendationslist = ({ recommendations, handleClick }) => {
  const backdropUri = 'https://image.tmdb.org/t/p/w185/';

  return (
    <div id='recommendations'>
      <h3>Recommendations</h3>
        <div className='scroller'>
          {recommendations.map(recommendation => (<Recommendation key={recommendation.id} movieId={recommendation.id} backdrop={backdropUri + recommendation.backdrop_path} title={recommendation.title} handleClick={handleClick} />))}
        </div>
    </div>
  );
}

export default Recommendationslist;