import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

// make own carousel
import { Container, Pagination, Stack } from '@mui/material';

const LandingSearchPage = (props) => {
  console.log('searchMovieData => ', props.searchMovieData)
  // return (
  //   <div>
  //     {
  //       props.listOfMovies.length > 0 ?
  //       <MovieList listOfMovies={props.listOfMovies} />
  //       :
  //       <p>Sorry, we couldn't find any results for your search.</p>
  //     }
  //   </div>
  // );

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    console.log('page???', value)
    setPage(value);
  };

  return (
    <>
      {props.searchMovieData.results.length > 0
        ?
        <Container sx={{ py: 10 }} maxWidth="md">
          <MovieList listOfMovies={props.searchMovieData.results} />
          <Stack spacing={4} sx={{ pt: '50px' }}>
            <Pagination count={props.searchMovieData.total_pages}  page={page} onChange={handleChange}  />
          </Stack>
        </Container>
        :
        <p>Sorry, we couldn't find any results for your search.</p>
      }
    </>
  );
}

export default LandingSearchPage;




