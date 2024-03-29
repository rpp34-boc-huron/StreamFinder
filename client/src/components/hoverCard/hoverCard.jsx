import {Card, CardContent, CardMedia, CardActionArea, Typography, Stack, Grid, Paper, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddToFavorites from './addToFavoritesButton';
import AddToList from './addToListButton';
import { getMovieDetails, addToFavorites, addToList } from '../../utils/getTMDBdata';
import { useNavigate } from 'react-router-dom';
import url from "./providerLink.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";




export default function HoverCard({ movieId, set, toBeWatched, favorited, name, setRandomNumber }) {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [spacing, setSpacing] = useState(2);
  const [poster, setPoster] =useState('');
  const [providerArr, setProviderArr] = useState([])
  const [loading, setLoading] = useState(true)

  const id = movieId
  const getProvider = (streaming) => {
    streaming.map((obj) => {
     for (const key in url) {
      if (key === obj.provider_name) {
        obj.link = url[key]
      }
      }
    })
    return streaming
  }

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 250);
    getMovieDetails(movieId)
      .then((data) => {
        const movieInfo = data.movieInfo
        const streaming = data.streaming.results.US?.flatrate
        if(streaming) {
          console.log(streaming)
          getProvider(streaming)
          setProviderArr(streaming)
        }
        const title = movieInfo.original_title;
        const description = movieInfo.overview;
        const poster_path = movieInfo.poster_path;
        const image = `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`
        setPoster(poster_path)
        setMovieTitle(title)
        setMovieDescription(description)
        setMovieImage(image)
      })
  }, [])

  const onMouseLeave = (e) => {
    let { top, left, bottom, right } = e.target.getBoundingClientRect();
    if (e.clientX > right || e.clientX < left || e.clientY > bottom || e.clientY < top) {
      set(false);
    }
  }
  if(loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center",  alignItems: 'center'}}>
          <CircularProgress color="success" />
      </Box>
    )
  }
  // if(movieImage !== '') {
    return (
      <div onMouseLeave={() => set(false)} >
      <Card sx={{ width: '400px', height: '375px', position: 'relative', zIndex: 5 }}>
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
              height: '107px'
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
                  <CardActionArea href={provider.link} target="_blank" disabled={provider.link ? false : true} sx={{height: 30}}>
                        <CardMedia
                        component="img"
                        height="30"
                        image={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        />

                    </CardActionArea>
                  </Card>)
              )}
            <AddToFavorites event={{addToFavorites}} movieID={{id}} poster={{poster}} favorited={favorited} setRandomNumber={setRandomNumber}/>
            <AddToList event={{addToList}} movieID={{id}} poster={{poster}} toBeWatched={toBeWatched}/>

            </Stack>
      </Card>
      </div>
    );
  }
// }