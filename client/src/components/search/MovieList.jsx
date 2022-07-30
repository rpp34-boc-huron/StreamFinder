import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MovieList = (props) => {
  const { listOfMovies } = props;

  // handle onClick -> pass movie id to Movie Specifc Page
  const handleClickAMovie = (e) => {
    const id = e.target.id;
    console.log('clicked id ====>>', e.target);

  }

  return (
    // <Container sx={{ py: 10 }} maxWidth="md">
      <Grid container spacing={4}>
        {listOfMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={4} md={3}>
            <Card  onClick={handleClickAMovie}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
              className={movie.id.toString()}
                component="img"
                sx={{
                  pt: '20%',
                }}
                image={
                  movie.poster_path !== null
                    ?
                    `https://www.themoviedb.org/t/p/w185${movie.poster_path}`
                    :
                    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
                alt='Image Not Supported'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h5" className={movie.id.toString()}>
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    // </Container>
  );
}

export default MovieList;