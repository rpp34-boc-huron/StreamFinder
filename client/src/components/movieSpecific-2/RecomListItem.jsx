import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function RecomListItem({ backdropUrl, movie_id, title, release_date, handleClick }) {
  return (
    <ImageListItem
      sx={{
        width: 280,
        height: 150
      }}
    >
      <img
        src={backdropUrl}
        alt={title}
        id={movie_id}
        loading='lazy'
        onClick={handleClick}
      />
      <ImageListItemBar
        title={title}
        subtitle={release_date}
      />
    </ImageListItem>
  )
}