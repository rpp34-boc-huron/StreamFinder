import React, { useState } from 'react';
import axios from 'axios';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchMovieResultsData } from '../../utils/getTMDBdata';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
  const { setSearchMovieData } = props;
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
  }

  const handleSearch = () => {
    if (keywords !== '') {
      getSearchMovieResultsData(keywords)
        .then(data => {
          if (data.results.length > 0) {
            setSearchMovieData(data);
            navigate(`/search_movies/${keywords}/${data.page}`);
          } else {
            navigate(`/search_movies/${keywords}`);
          }
          setKeywords('');
        })
        .catch(err => {
          console.log('Search Bar Error....', err);
        })
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
    // search when type, change to KeyUp
    // handleSearch();
  }

  return (
    <Paper
    className="search"
    sx={{borderRadius: '19px', 'width': '40%', display:'flex'}}
    >
    <InputBase
        sx={{ ml: 3, py: 1, flex: 1 }}
        placeholder="Search for a movie..."
        inputProps={{ 'aria-label': 'search for a movie...' }}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={keywords}
      />
      <IconButton type="submit" sx={{mr: 3, p: 1 }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
