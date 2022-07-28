import React, { useState, useEffect } from 'react';
import MultiActionAreaCard from './components/hoverCard/hoverCard.jsx';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingSearchPage from './components/search/LandingSearchPage';

const App = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchMovieData, setSearchMovieData] = useState([]);

  return (
    <div className="app">
      <Navbar setSearch={setSearchStatus} setSearchMovieData={setSearchMovieData}/>
      Hello World From React
      {searchStatus ? <LandingSearchPage searchMovieData={searchMovieData} setSearch={setSearchStatus} /> : <LandingPage />}
      <MultiActionAreaCard></MultiActionAreaCard>

    </div>
  );
};

export default App;
