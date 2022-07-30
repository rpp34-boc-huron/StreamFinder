import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';
import { Container, Pagination, Stack } from '@mui/material';

const LandingSearchPage = (props) => {
  const { searchMovieData, keywords, setSearchMovieData } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(searchMovieData.page);
  })

  const handleChange = (event, value) => {
    console.log('clicked page???', value)
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
          <Stack spacing={4} sx={{ pt: '50px' }} justifyContent="space-evenly" alignItems="center">
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




