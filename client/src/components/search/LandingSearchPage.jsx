import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';
import { Container, Pagination, Stack } from '@mui/material';

const LandingSearchPage = (props) => {
  const { searchMovieData, keywords, page, setPage, setSearchMovieData} = props;
  console.log('searchMovieData => ', searchMovieData)

  const handleChange = (event, value) => {
    console.log('page???', value)
    getSearchMovieResultsData(keywords, value)
      .then(data => {
        setPage(data.page);
        setSearchMovieData(data);
      })
      .catch(err => {
        console.log('Landing Search Page Error....', err);
      })
  };

  return (
    <>
      {searchMovieData.results.length > 0
        ?
        <Container sx={{ py: 10 }} maxWidth="md">
          <MovieList listOfMovies={searchMovieData.results} />
          <Stack spacing={4} sx={{ pt: '50px' }}>
            <Pagination count={searchMovieData.total_pages} page={page} onChange={handleChange} />
          </Stack>
        </Container>
        :
        <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
      }
    </>
  );
}

export default LandingSearchPage;




