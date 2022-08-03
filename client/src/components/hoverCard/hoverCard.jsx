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


export default function HoverCard({ movieId, handleClick }) {

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
          const netflixClick = getProvider(streaming, 'Netflix');
          const huluClick = getProvider(streaming, 'Hulu');
          const HBOClick = getProvider(streaming, 'HBO Now');
          if(!netflixClick){
            setNetflix(Netflix)
          }
          if(!huluClick){
            setHulu(hulu)
          }
          if(!HBOClick){
            setHBO(HBO)
          }
          setNetflixClick(netflixClick)
          setHuluClick(huluClick)
          setHBOClick(HBOClick)
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

  if(movieImage !== '') {
    return (
      <Card sx={{ maxWidth: 300, maxHeight: 330, position: 'absolute', zIndex: 5 }}>
        <CardActionArea
          onClick = {(e) => navigate(`/movie/${id}`)}
        >
          <CardMedia
            component="img"
            height="140"
            image={movieImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
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
              WebkitLineClamp: "2",
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
          sx={{paddingBottom: "2px", paddingLeft: "12px"}}
        >
              <Card sx={{minWidth:30, maxWidth:30}}>
                <CardActionArea href="https://www.netflix.com/" target="_blank" disabled={netflixState} sx={{height: 30}}>
                  <CardMedia
                        component="img"
                        height="30"
                        image={netflixIcon}
                  />
                </CardActionArea>
              </Card>
            {/* <Card sx={{minWidth:30, maxWidth: 30 ,                            color: '#ffff',
                            opacity: 0}}>
              <CardActionArea href="https://hulu.com" target="_blank" disabled={huluState} sx={{maxHeight: 30}}>
                <CardMedia
                      component="img"
                      height="30"
                      image={white}
                />
              </CardActionArea>
            </Card>
            <Card sx={{minWidth:30, maxWidth: 30,      color: '#ffff',
                            opacity: 0}}>

            </Card> */}
             {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>

                    {/* {[0,1,2,3].map((value) => (
                      <Grid key={value} item>
                        <Paper
                          sx={{
                            height: 30,
                            width: 30,
                            color: '#ffff',
                            opacity: 0
                          }}
                        />
                      </Grid>

                    ))} */}
                  {/* </Grid>
                </Grid>
              </Grid>  */}
            <AddToFavorites event={{addToFavorites}} movieID={{id}} poster={{poster}}/>
            <AddToList event={{addToList}} movieID={{id}} poster={{poster}} />
            </Stack>
      </Card>
    );
  }
}