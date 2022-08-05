import {Card, CardContent, CardMedia, CardActionArea, Typography, Stack, Grid, Paper, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddToFavorites from './addToFavoritesButton';
import AddToList from './addToListButton';
import HBO from '../../../assets/hbo.png';
import hbogrey from '../../../assets/hbo_grey.png';
import netflixgrey from '../../../assets/netflix_grey.png';
import hulugrey from '../../../assets/hulu_grey.png';
import hulu from '../../../assets/hulu.png';
import Netflix from '../../../assets/netflix.jpeg';
import { getMovieDetails, addToFavorites, addToList } from '../../utils/getTMDBdata';
import { useNavigate } from 'react-router-dom';


export default function HoverCard({ movieId, set }) {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [netflixIcon, setNetflix] = useState(netflixgrey);
  const [huluIcon, setHulu] = useState(hulugrey);
  const [hboIcon, setHBO] = useState(hbogrey);
  const [netflixState, setNetflixClick] = useState(true);
  const [huluState, setHuluClick] = useState(true);
  const [hboState, setHBOClick] = useState(true);
  const [spacing, setSpacing] = useState(2);
  const [poster, setPoster] =useState('');
  const [providerArr, setProviderArr] = useState([])
  //9615 -> HBO
  //122066 -> HUlu
  //881957 -> netflix
  const id = movieId
  const getProvider = (arr, type) => {
    const index = arr.map(obj => obj.provider_name).indexOf(type);
    return index >= 0 ? false : true;
  }

  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        const movieInfo = data.movieInfo
        const streaming = data.streaming.results.US?.flatrate
        if(streaming) {
          console.log(streaming)
          //'Disney Plus
          setProviderArr(streaming)

        }
        const title = movieInfo.original_title;
        const description = movieInfo.overview;
        const poster_path = movieInfo.poster_path;
        const image = `https://image.tmdb.org/t/p/w500${poster_path}`
        setPoster(poster_path)
        setMovieTitle(title)
        setMovieDescription(description)
        setMovieImage(image)
      })
  })

  const onMouseLeave = (e) => {
    let { top, left, bottom, right } = e.target.getBoundingClientRect();
    if (e.clientX > right || e.clientX < left || e.clientY > bottom || e.clientY < top) {
      set(false);
    }
  }

  if(movieImage !== '') {
    return (
      <div onMouseLeave={() => set(false)} >
      <Card sx={{ width: '400px', height: '350px', position: 'relative', zIndex: 5 }}>
        <CardActionArea
          onClick = {(e) => navigate(`/movie/${id}`)}
        >
          <CardMedia
            component="img"
            height="175px"
            image={movieImage}
            sx={{height: 200, media: {width: 10}}}
          />
          <CardContent
            sx={{
              height: '115px'
            }}
          >
            <Typography gutterBottom variant="h5" component="div"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
                fontSize: 24,
              }}
            >
              {movieTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              }}
            >
            {movieDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Stack
          spacing={1}
          direction="row"
          justifyContent="space-evenly"
          sx={{paddingBottom: "0px", paddingLeft: "12px", background:"white", '&:hover': {background: 'white'}}}
        >
          {providerArr.map((provider) => (
              <Card sx={{paddingTop: "3px", minWidth:30, maxWidth:30}}>
                  <CardActionArea href="https://www.netflix.com/" target="_blank" disabled={netflixState} sx={{height: 30}}>
                        <CardMedia
                        component="img"
                        height="30"
                        image={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        />
                    </CardActionArea>
                  </Card>)
              )}
            <AddToFavorites event={{addToFavorites}} movieID={{id}} poster={{poster}}/>
            <AddToList event={{addToList}} movieID={{id}} poster={{poster}} />
            </Stack>
      </Card>
      </div>
    );
  }
}