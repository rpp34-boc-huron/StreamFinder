import React, { useState, useEffect } from 'react';
import MultiActionAreaCard from './components/hoverCard/hoverCard.jsx';
import LandingPage from  './components/LandingPage/LandingPage.jsx'
import './style.css';

const App = () => {

  return (
    <div className="app">
      <MultiActionAreaCard></MultiActionAreaCard>
      Hello World From React
      Test CI/CD
      <LandingPage />
    </div>
  );
};

export default App;
