import React, { useState, useEffect } from 'react';
import './style.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import Moviesumm from './components/movieSpecific/movieSummary';
import LandingSearchPage from './components/search/LandingSearchPage';
import UserProfile from './components/profile/UserProfile.jsx';
import Login from './components/Authentication/login';
import useToken from './components/Authentication/useToken';


const App = () => {
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [movieId, setMovieId] = useState(238)
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();

  const handleClick = (e, movieID) => {
    e.preventDefault();
    const movieId = e.target.id || movieID
    setMovieId(movieId);
  }

  // if (!token) {
  //   return <Login setToken={setToken} setUserData={setUserData} />
  // }

  return (
    <HashRouter>
    <div className="app">
      <Navbar setSearchMovieData={setSearchMovieData} />
        <Routes>
          <Route exact path='/' element={ <LandingPage handleClick={handleClick}/>} />
          <Route exact path='/search_movies/:keywords/:page' element={<LandingSearchPage searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} /> } />
          <Route exact path='/profile' element={<UserProfile />} />
          <Route exact path='/movie/:movieId' element={<Moviesumm />} />
        </Routes>
    </div>
    </HashRouter>

  );

  //tests
};

export default App;
