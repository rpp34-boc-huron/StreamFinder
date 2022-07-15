import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/search/SearchBar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      Hello World From React
    </div>
  );
};

export default App;