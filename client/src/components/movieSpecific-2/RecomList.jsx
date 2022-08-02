import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import RecomListItem from './RecomListItem';

export default function RecomList({ recommendations, handleClick }) {
  const backdropUri = 'https://image.tmdb.org/t/p/w300/';

  return (
    <div id='recommendations'>
      <h3>Recommendations</h3>
      <ImageList sx={{
        width: 1200,
        height: 190,
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
        gridAutoColumns: "minmax(300px, 1fr)"
      }}>
        {recommendations.map(recommendation => (
          <RecomListItem
            key={recommendation.id}
            backdropUrl={backdropUri + recommendation.backdrop_path}
            movie_id={recommendation.id}
            title={recommendation.title}
            release_date={recommendation.release_date.slice(0, 4)}
            handleClick={handleClick}
          />
        )) }
      </ImageList>
    </div>
  );
}