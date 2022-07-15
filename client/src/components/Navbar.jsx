import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from 'react-router-dom';

import '../App.css';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="Navbar">
            <button onClick={() => { navigate('/'); }}>
                <HomeIcon />
            </button>
            <SearchBar />
        </nav>
    )
};

export default Navbar;