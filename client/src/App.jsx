import React, { useState, useEffect } from 'react';
import Moviesumm from './components/movieSpecific/movieSummary';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingSearchPage from './components/search/LandingSearchPage';
import UserProfile from './components/profile/UserProfile.jsx';

const App = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [movieId, setMovieId] = useState(238)

  const handleClick = (e, movieID) => {
    e.preventDefault();
    const movieId = e.target.id || movieID
    setMovieId(movieId);
}


  return (
    <BrowserRouter>
    <div className="app">
      <Navbar setSearch={setSearchStatus} setSearchMovieData={setSearchMovieData} keywords={keywords} setKeywords={setKeywords} />

        <Routes>
          <Route exact path='/' element={searchStatus ? <LandingSearchPage keywords={keywords} searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} setSearchStatus={setSearchStatus} setMovieId={setMovieId} /> : <LandingPage handleClick={handleClick}/>}/>
          <Route exact path='/profile' element={<UserProfile />} />
          <Route exact path='/movie/:movieId' element={<Moviesumm handleClick={ handleClick }/>} />
        </Routes>
    </div>
    </BrowserRouter>

  );

  //tests
};

export default App;
