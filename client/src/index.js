import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingSearchPage from './components/search/LandingSearchPage';
import UserProfile from './components/profilePage/UserProfile';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);


root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/search/movies/:keywords' element={<LandingSearchPage />} />
      <Route path='/profile' element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
);




