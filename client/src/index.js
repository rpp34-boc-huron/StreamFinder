import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingSearchPage from './components/search/LandingSearchPage';
import UserProfile from './components/profile/UserProfile.jsx';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);

const movieId = 1234;





