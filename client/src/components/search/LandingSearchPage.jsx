import React, { useState, useEffect } from 'react';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';
import { Box, Container, Pagination, Stack, Grid } from '@mui/material';
import MovieResultCard from './MovieResultCard';
import { useNavigate, useParams } from 'react-router-dom';

const LandingSearchPage = (props) => {
  const { searchMovieData, setSearchMovieData } = props;
  const navigate = useNavigate();
  const { keywords, page } = useParams();
  const [searchMovieList, setSearchMovieList] = useState([]);
  window.scrollTo(0, 0);

  useEffect(() => {
    getMoviesData(keywords, parseInt(page));
    setSearchMovieList(searchMovieData.results);
  }, [])

  const getMoviesData = (keywords, page) => {
    getSearchMovieResultsData(keywords, page)
      .then(data => {
        setSearchMovieData(data);
        setSearchMovieList(data.results);
        navigate(`/search_movies/${keywords}/${data.page}`);
      })
      .catch(err => {
        console.log('Landing Search Page Error....', err);
      })
  }

  const handleChangePage = (event, value) => {
    getMoviesData(keywords, value);
  };

  return (
    <>
      {searchMovieData.results && searchMovieData.results.length > 0
        ?
        <Container sx={{ margin: '50px auto' }} >
          <Grid container spacing={4} mt={0} >
            {searchMovieData.results.map((movie) => (
              <MovieResultCard key={movie.id} movie={movie} />
            ))}
          </Grid>
          <Stack spacing={4} sx={{ pt: '50px' }} justifyContent="space-evenly" alignItems="center">
            <Pagination count={searchMovieData.total_pages} page={parseInt(page)} onChange={handleChangePage} />
          </Stack>
        </Container>
        :
        null
      }
    </>
  );
}

export default LandingSearchPage;




