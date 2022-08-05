import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { useNavigate } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import '../App.css';
import axios from 'axios';

const Navbar = (props) => {
    const { setSearchMovieData } = props;
    const navigate = useNavigate();

    const signout = () => {
      axios.get('/sase/signout')
      .then(() => location.reload());
    };
    return (
        <React.Fragment>
            <AppBar position="sticky" sx={{ color: 'black', backgroundColor: 'rgba(119,136,153, 0.6)' }} className="navigation" >
                <Toolbar sx={{ justifyContent: 'space-between', margin: '10px'}}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            px: 3,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >&#127916; Stream Finder
                    </Typography>
                    <SearchBar setSearchMovieData={setSearchMovieData} />
                    <Toolbar sx={{ justifyContent: 'end', fontSize: '1.25rem' }}>
                        <Button onClick={() => navigate('/')} color="inherit" sx={{ fontSize: 'inherit' }}>Home</Button>
                        <Button onClick={() => navigate('/profile')} color="inherit" sx={{ fontSize: 'inherit' }} >Profile</Button>
                        <Button onClick={() => signOut()} color="inherit" sx={{ fontSize: 'inherit' }}>Sign Out</Button>
                    </Toolbar>
                </Toolbar>
                {/* <Toolbar sx={{ justifyContent: 'end', margin: '0px 1%' }}>
                    <Button sx={{ ml: 2 }} onClick={() => navigate('/')} color="inherit">Home</Button>
                    <Button sx={{ ml: 2 }} onClick={() => navigate('/profile')} color="inherit">Profile</Button>
                    <Button sx={{ ml: 2 }} color="inherit">Sign Out</Button>
                </Toolbar> */}
            </AppBar>
        </React.Fragment>
    );
};

export default Navbar;