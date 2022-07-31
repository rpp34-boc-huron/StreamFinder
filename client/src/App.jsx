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

  return (
    <div className="app">
      <div>
      <Moviesumm />
    </div>
      <Navbar setSearch={setSearchStatus} setSearchMovieData={setSearchMovieData} keywords={keywords} setKeywords={setKeywords} />
      {searchStatus ? <LandingSearchPage keywords={keywords} searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} /> : <LandingPage />}
      {/* <UserProfile /> */}
      Hello World From React
    </div>

  );

  //tests
};

export default App;
