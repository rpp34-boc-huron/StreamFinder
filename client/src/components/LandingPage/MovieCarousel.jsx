import React, { useEffect, useState } from 'react';
// import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card, Grid } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MovieCard from './MovieCard.jsx';
// import '../style.css';
import Carousel from '../profile/Carousel.jsx';
import HoverCard from '../hoverCard/hoverCard.jsx';

const MovieCarousel = ({ header, apiMethod, user, type, setFavorites, setWatchList, favorites, watchlist, randomNumber }) => {

    const [trendingList, setTrendingList] = useState([]);
    const [error, setError] = useState(null);
    const [randomNum, setRandomNumber] = useState(0);

    let rando = randomNumber;

    useEffect(() => {
      if (user) {
        apiMethod((err, res) => {
          if (err) {
            setError(err);
          } else {
            setTrendingList(res.data);
            if (type === 'favorites') {
              const favoriteIds = res.data.map((movie) => {
                return movie.id;
              });
              setFavorites(favoriteIds);
            } else if (type === 'watchlist') {
              const watchListIds = res.data.map((movie) => {
                return movie.id;
              });
              setWatchList(watchListIds);
            }
          }
        }, user)
      } else {
        apiMethod((err, res) => {
          if (err) {
            setError(err);
          } else {
            let data = res.data.results.map(movie => {
              return {
                'image': `https://image.tmdb.org/t/p/w185${movie.poster_path}`,
                'id': movie.id
              };
            });
            setTrendingList(data);

          }
        })
      }

    }, [randomNum])

    return <Carousel name={header} arrOfMoviesObj={trendingList} ExpandedView={HoverCard} favorites={favorites} watchList={watchlist} setRandomNumber={setRandomNumber}>{/*HoverCard*/}</Carousel>

}

export default MovieCarousel;