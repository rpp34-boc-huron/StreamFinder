import React, { useState } from 'react';
import axios from 'axios';
import {Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';

const SearchBar = (props) => {
  const [keywords, setKeywords] = useState('');
  const searchButtonStyle = { cursor: 'pointer' };

  const handleInput = (e) => {
    let input = e.target.value;
    setKeywords(input);
  }

  const handleSearch = () => {
    console.log(keywords, '<- search bar');
      getSearchMovieResultsData(keywords)
      .then(data => {
        props.setSearch(true)
        props.setSearchMovieData(data)
      })
      .catch(err => {
        console.log('oh no....', err);
      })

  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // console.log('search via Enter');
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
