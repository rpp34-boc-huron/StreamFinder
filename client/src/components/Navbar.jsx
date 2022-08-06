import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { useNavigate } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Button, CssBaseline, Box } from '@mui/material';
import '../App.css';
import axios from 'axios';
import logo from '../../public/imgs/transparent_streamfinder_icon.png';

const Navbar = (props) => {
    const { setSearchMovieData } = props;
    const navigate = useNavigate();

    const signOut = () => {
        axios.get('/sase/signout')
            .then(() => location.reload());
    };
    return (
        <React.Fragment>
            <AppBar position="sticky" sx={{ color: 'rgba(0,0,0,0.65)', backgroundColor: 'rgba(119,136,153, 0.6)' }} className="navigation" >
                <Toolbar sx={{ justifyContent: 'space-between', margin: '10px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                width: '50px',
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                                background: `url(${logo})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                        </Typography>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >Stream Finder
                        </Typography>
                    </Box>
                    <SearchBar setSearchMovieData={setSearchMovieData} />
                    <Toolbar sx={{ justifyContent: 'end', fontSize: '1.25rem' }}>
                        <Button onClick={() => navigate('/')} color="inherit" sx={{ fontSize: 'inherit' }}>Home</Button>
                        <Button onClick={() => navigate('/profile')} color="inherit" sx={{ fontSize: 'inherit' }} >Profile</Button>
                        <Button onClick={() => signOut()} color="inherit" sx={{ fontSize: 'inherit' }}>Sign Out</Button>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </React.Fragment >
    );
};

export default Navbar;