import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import RecomListItem from './RecomListItem';
import Typography from '@mui/material/Typography';

export default function RecomList({ recommendations, handleClick }) {
  const backdropUri = 'https://image.tmdb.org/t/p/w300/';

  return (
    <div id='recommendations'>
      <Typography variant="h4" gutterBottom component="div">
        &nbsp;&nbsp;&nbsp; Recommendations
      </Typography>
      <ImageList
        sx={{
          width: 0.98,
          height: 190,
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)) !important",
          gridAutoColumns: "minmax(300px, 1fr)",
          mx: 'auto'
        }}
        variant="quilted"
      >
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