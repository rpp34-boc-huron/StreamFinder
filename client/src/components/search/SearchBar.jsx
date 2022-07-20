import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const SearchBar = (props) => {
  const [keywords, setKeywords] = useState('');
  const searchButtonStyle = { cursor: 'pointer' };
  // let navigate = useNavigate();

  const handleInput = (e) => {
    let input = e.target.value;
    setKeywords(input);
  }

  const handleSearch = () => {
    console.log(keywords, '<- search bar');
      axios.get(`/search/movies/${keywords}`)
      .then(result => {
        props.setSearch(true)
        props.setMovieList(result.data)
        // let path = `/search/movies/${keywords}`;
        // navigate(path, { state: { keywords, data: result.data } });
      })
      .catch(err => {
        console.log('oh no....', err);
      })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('search via Enter');
      handleSearch();
    }
    // search when type, change to KeyUp
    // handleSearch();
  }

  return (
    <Paper className="search">
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a movie..."
        inputProps={{ 'aria-label': 'search for a movie...' }}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
