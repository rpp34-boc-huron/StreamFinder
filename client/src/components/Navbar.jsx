import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './search/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, CssBaseline, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
import '../App.css';




const Navbar = (props) => {
    const { setSearch, setSearchMovieData, keywords, setKeywords } = props;
    // const ref = useRef(null);

    const backToLandingPage = () => {
        setSearch(false);
        setKeywords('');

        // Need to clean input filed's value
            // ref.current.value = '';
    }


    const navigate = useNavigate();

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }} className="navigation">
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h4"
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
                        <SearchBar setSearch={setSearch} setSearchMovieData={setSearchMovieData} keywords={keywords} setKeywords={setKeywords} backToLandingPage={backToLandingPage} />
                        <Button onClick={() => navigate('/')} color="inherit">Home</Button>
                        <Button onClick={() => navigate('/profile')} color="inherit">Profile</Button>
                        <Button color="inherit">Sign Out</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Navbar;