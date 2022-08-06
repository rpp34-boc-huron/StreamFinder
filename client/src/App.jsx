import React, { useState, useEffect } from 'react';
import './style.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Moviesumm from './components/movieSpecific/movieSummary';
import LandingSearchPage from './components/search/LandingSearchPage';
import NoResultsPage from './components/search/NoResultsPage';
import UserProfile from './components/profile/UserProfile.jsx';
// import Login from './components/Authentication/login';
import useToken from './components/Authentication/useToken';
import axios from 'axios';
import Login from './login.jsx';


const App = () => {
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [movieId, setMovieId] = useState(238)
  const [token, setToken] = useState();
  const [username, setUsername] = useState(null);


  const handleClick = (e, movieID) => {
    e.preventDefault();
    const movieId = e.target.id || movieID
    setMovieId(movieId);
  }

  // if (!token) {
  //   return <Login setToken={setToken} setUserData={setUserData} />
  // }

  if (username === null) {
    return <Login render={username} setUsername={setUsername}/> 
  };

  return (
    <HashRouter>
      <div className="app">
          <Navbar setSearchMovieData={setSearchMovieData} />
        <Routes>
          <Route exact path='/profile' element={<UserProfile username={username} setUsername={setUsername}/>} />
          <Route exact path='/' element={<LandingPage handleClick={handleClick} />} />
          <Route exact path='/search_movies/:keywords/:page' element={<LandingSearchPage searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} />} />
          <Route exact path='/search_movies/:keywords' element={<NoResultsPage />} />
          <Route exact path='/movie/:movieId' element={<Moviesumm />} />
        </Routes>
      </div>
    </HashRouter>

  );

  //tests
};

export default App;
