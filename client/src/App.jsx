import React, { useState, useEffect } from 'react';
import HoverCard from './components/hoverCard/hoverCard.jsx';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingSearchPage from './components/search/LandingSearchPage';

const App = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const [listOfMovies, setListOfMovies] = useState(null);

  return (
    <div className="app">
      <Navbar setSearch={setSearchStatus} setMovieList={setListOfMovies}/>
      Hello World From React
      {searchStatus ? <LandingSearchPage listOfMovies={listOfMovies} setSearch={setSearchStatus} /> : <LandingPage />}

      <HoverCard></HoverCard>

    </div>
  );
};

export default App;
