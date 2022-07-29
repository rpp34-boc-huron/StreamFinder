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
  const [keywords, setKeywords] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div className="app">
      <Navbar setSearch={setSearchStatus} setSearchMovieData={setSearchMovieData} keywords={keywords} setKeywords={setKeywords} setPage={setPage}/>
      Hello World From React
      {searchStatus ? <LandingSearchPage keywords={keywords} page={page} setPage={setPage} searchMovieData={searchMovieData} setSearchMovieData={setSearchMovieData} /> : <LandingPage />}
      <MultiActionAreaCard></MultiActionAreaCard>

    </div>
  );
};

export default App;
