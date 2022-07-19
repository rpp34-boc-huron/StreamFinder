import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import '../App.css';
const Navbar = () => {
    const navigate = useNavigate();
    // return (
    //     <nav className="Navbar">
    //         <button onClick={() => { navigate('/'); }}>
    //             <HomeIcon />
    //         </button>
    //         <SearchBar />
    //     </nav>
    // )

    return (
        <Box sx={{ flexGrow: 1 }} className="navigation">
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >&#127916; Stream Finder
                    </Typography>
                    <SearchBar />
                    <Button color="inherit" onClick={() => { navigate('/'); }}>Home</Button>
                    <Button color="inherit">Profile</Button>
                    <Button color="inherit">Sign Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;