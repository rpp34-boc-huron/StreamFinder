import React, { useState, useEffect } from 'react';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';
import { Container, Pagination, Stack, Grid } from '@mui/material';
// import MovieList from './MovieList';
import MovieResultCard from './MovieResultCard';

const LandingSearchPage = (props) => {
  const { searchMovieData, keywords, setSearchMovieData, setSearchStatus } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(searchMovieData.page);
    window.scrollTo(0, 0);
  })

  const handleChangePage = (event, value) => {
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
        <Container sx={{ margin: '50px auto'}} >
          {/* <MovieList listOfMovies={searchMovieData.results} /> */}
          <Grid container spacing={4} mt={0} >
              {searchMovieData.results.map((movie) => (
                <MovieResultCard key={movie.id} movie={movie} setSearchStatus={setSearchStatus} />
              ))}
          </Grid>
          <Stack spacing={4} sx={{ pt: '50px' }} justifyContent="space-evenly" alignItems="center">
            <Pagination count={searchMovieData.total_pages} page={page} onChange={handleChangePage} />
          </Stack>
        </Container>
        :
        <div className="no-results-found">
          <p>Sorry, we couldn't find any results for "<b>{keywords}</b>"</p>
        </div>
      }
    </>
  );
}

export default LandingSearchPage;




