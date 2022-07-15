import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import MovieList from './MovieList';
import axios from 'axios';

const LandingSearchPage = (props) => {
  const {state} = useLocation();
  const { keywords, data } = state;
  // const [listOfMovies, setListOfMovies] = useState(data.results);
  // useEffect(()=> {
  //   setListOfMovies(data.result);
  // })
  // setListOfMovies(data.results);
  // console.log(keywords)
  // console.log('listOfMovies', data.results)
    // axios.get(`/search/movie/${keywords}`)
    //   .then(result => {
    //     setListOfMovies(result.data);
    //     console.log('successfully searched')
    //   })
    //   .catch(err => {
    //     console.log('oh no....');
    //   })

  return (
    <div>
      <Navbar />
      This is a landing search page
      <MovieList listOfMovies={data.results} />
    </div>
  );
}

export default LandingSearchPage;
