import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import UserProfile from './components/profile/UserProfile.jsx';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);

const movieId = 1234;





