import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import Moviesumm from './components/movieSpecific/movieSummary';
import LandingSearchPage from './components/search/LandingSearchPage';
import UserProfile from './components/profile/UserProfile.jsx';

const App = () => {
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [movieId, setMovieId] = useState(238)

  const handleClick = (e, movieID) => {
    e.preventDefault();
    const movieId = e.target.id || movieID
    setMovieId(movieId);
}

  return (
    <BrowserRouter>
    <div className="app">
      <Navbar setSearchMovieData={setSearchMovieData} />
        <Routes>
          <Route exact path='/' element={ <LandingPage handleClick={handleClick}/>} />
          <Route exact path='/search_movies/:keywords/:page' element={<LandingSearchPage searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} /> } />
          <Route exact path='/profile' element={<UserProfile />} />
          <Route exact path='/movie/:movieId' element={<Moviesumm handleClick={ handleClick }/>} />
        </Routes>
    </div>
    </BrowserRouter>

  );

  //tests
};

export default App;
