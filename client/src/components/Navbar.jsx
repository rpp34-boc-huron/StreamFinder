import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { useNavigate } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import '../App.css';

const Navbar = (props) => {
    const { setSearchMovieData } = props;
    const navigate = useNavigate();

    return (
        <React.Fragment>
                <AppBar position="sticky" sx={{ color: 'black', backgroundColor: '#dcdee3' }} className="navigation" >
                    <Toolbar sx={{ justifyContent: 'space-between', margin: '1% 1% 0px' }}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                ml: 3,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >&#127916; Stream Finder
                        </Typography>
                        <SearchBar setSearchMovieData={setSearchMovieData} />
                        {/* <Button onClick={() => navigate('/')} color="inherit">Home</Button>
                        <Button onClick={() => navigate('/profile')} color="inherit">Profile</Button>
                        <Button color="inherit">Sign Out</Button> */}
                    </Toolbar>
                    <Toolbar sx={{ justifyContent: 'end', margin: '0px 1%' }}>
                        <Button sx={{ ml: 2 }} onClick={() => navigate('/')} color="inherit">Home</Button>
                        <Button sx={{ ml: 2 }} onClick={() => navigate('/profile')} color="inherit">Profile</Button>
                        <Button sx={{ ml: 2 }} color="inherit">Sign Out</Button>
                    </Toolbar>
                </AppBar>
        </React.Fragment>
    );
};

export default Navbar;