import {Card, CardContent, CardMedia, CardActionArea, CardActions,Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddToFavorites from './addToFavoritesButton';
import AddToList from './addToListButton';
import HBO from '../../../assets/hbo2.png';
import hulu from '../../../assets/hulu.png';
import Netflix2 from '../../../assets/netflix3.jpeg';
import { getMovieDetails, addToFavorites, addToList } from '../../utils/getTMDBdata';


export default function HoverCard() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const id = 2134

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        // console.log(data)
        const title = data.original_title;
        const description = data.overview;
        const poster_path = data.poster_path;
        const image = `https://image.tmdb.org/t/p/w500${poster_path}`
        setMovieTitle(title)
        setMovieDescription(description)
        setMovieImage(image)
      })
  })
    return (
      <Card sx={{ maxWidth: 345, maxHeight: 305 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={movieImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movieTitle}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{overflow: "hidden",
                   textOverflow: "ellipsis"
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
          sx={{paddingBottom: "2px"}}
        >

          {/* <CardActions > */}
              <Card sx={{minWidth:30, maxWidth:30}}>
                <CardActionArea href="https://www.netflix.com/title/70126574" target="_blank" sx={{height: 30}}>
                  <CardMedia
                        component="img"
                        height="30"
                        image={Netflix2}
                  />
                </CardActionArea>
              </Card>
            <Card sx={{minWidth:30, maxWidth: 30}}>
              <CardActionArea href="https://hulu.com" target="_blank" sx={{maxHeight: 30}}>
                <CardMedia
                      component="img"
                      height="30"
                      image={hulu}
                />
              </CardActionArea>
            </Card>
            <Card sx={{minWidth:30, maxWidth: 30}}>
              <CardActionArea href="https://hbo.com" target="_blank">
                <CardMedia
                      component="img"
                      height="30"
                      image={HBO}
                />
              </CardActionArea>
            </Card>
            <AddToFavorites event={{addToFavorites}}/>
            <AddToList />
            </Stack>
          {/* </CardActions> */}
      </Card>
    );
}

