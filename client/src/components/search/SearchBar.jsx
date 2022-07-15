import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

const SearchBar = () => {
  const [keywords, setKeywords] = useState('');
  const searchButtonStyle = { cursor: 'pointer' };
  let navigate = useNavigate();

  const handleInput = (e) => {
    let input = e.target.value;
    setKeywords(input);
  }

  const handleSearch = () => {
    event.preventDefault();
    // console.log('before call api keywords ===>', keywords)
    axios.get(`/search/movies/${keywords}`)
      .then(result => {
        // console.log('successfully searched')
        // console.log('data in searchBar', result.data)
        let path = `/search/movies/${keywords}`;
        navigate(path, { state: { keywords, data: result.data } });
      })
      .catch(err => {
        console.log('oh no....');
      })
  }

  return (
    <div className="searchBar">
      <input type='text' placeholder='Search for a movie...' onChange={handleInput}></input>
      <button onClick={handleSearch}>
        <SearchIcon style={searchButtonStyle} />
      </button>
    </div>
  );
};

export default SearchBar;
