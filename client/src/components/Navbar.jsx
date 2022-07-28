import React, { useState, useEffect } from 'react';
import SearchBar from './search/SearchBar';
import { Link } from 'react-router-dom';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, CssBaseline, useScrollTrigger} from '@mui/material';
import PropTypes from 'prop-types';
import '../App.css';


// function ElevationScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: window ? window() : undefined,
//     });

//     return React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//     });
// }

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };


const Navbar = (props) => {
    // const navigate = useNavigate();
    // return (
    //     <nav className="Navbar">
    //         <button onClick={() => { navigate('/'); }}>
    //             <HomeIcon />
    //         </button>
    //         <SearchBar />
    //     </nav>
    // )
    return (
        <React.Fragment>
            <CssBaseline />
            {/* <Box sx={{ flexGrow: 1 }} className="navigation"> */}
                {/* <ElevationScroll {...props}> */}
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
                            <SearchBar setSearch={props.setSearch} setMovieList={props.setMovieList} />
                            <Button component={Link} to="/" color="inherit">Home</Button>
                            <Button color="inherit">Profile</Button>
                            <Button color="inherit">Sign Out</Button>
                        </Toolbar>
                    </AppBar>
                {/* </ElevationScroll> */}
            {/* </Box> */}
        </React.Fragment>
    );
};

export default Navbar;