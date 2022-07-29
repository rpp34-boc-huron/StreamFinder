import React, { useState } from 'react';
import axios from 'axios';
import {Paper, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';

const SearchBar = (props) => {
  const searchButtonStyle = { cursor: 'pointer' };
  const { setSearch, setSearchMovieData, keywords, setKeywords, setPage } = props;

  const handleInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
  }

  const handleSearch = () => {
    console.log(keywords, '<- search bar');
      getSearchMovieResultsData(keywords)
      .then(data => {
        setSearch(true);
        setSearchMovieData(data);
        setPage(data.page);
      })
      .catch(err => {
        console.log('oh no....', err);
      })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
