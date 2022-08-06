import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, CssBaseline, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
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
                        <SearchBar setSearchMovieData={setSearchMovieData} />
                        <Button onClick={() => navigate('/')} color="inherit">Home</Button>
                        <Button onClick={() => navigate('/profile')} color="inherit">Profile</Button>
                        {/* <Button onClick={() => location.reload()}color="inherit">Sign Out</Button> */}
                        <Button onClick={signout}color="inherit">Sign Out</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Navbar;