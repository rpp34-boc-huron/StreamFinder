import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import HoverCard from './components/hoverCard/hoverCard.jsx';
=======
>>>>>>> 5f5d1202ed110194e3fae76681430cd507a2810d
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
      {searchStatus ? <LandingSearchPage listOfMovies={listOfMovies} setSearch={setSearchStatus} /> : <LandingPage />}
<<<<<<< HEAD

      <HoverCard></HoverCard>

=======
>>>>>>> 5f5d1202ed110194e3fae76681430cd507a2810d
    </div>
  );
};

export default App;
