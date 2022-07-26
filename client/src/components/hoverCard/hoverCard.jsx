import {Card, CardContent, CardMedia, CardActionArea, CardActions,Typography, Stack } from '@mui/material';
import React from 'react';
import AddToFavorites from './addToFavoritesButton';
import AddToList from './addToListButton';
import Netflix from '../../../assets/netflix.png';
import HBO from '../../../assets/hbo2.png';
import hulu from '../../../assets/hulu.png';
import Netflix2 from '../../../assets/netflix3.jpeg';


export default function HoverCard() {
  const addToFavorite = e => {
    console.log(Netflix)
  }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image="https://www.denofgeek.com/wp-content/uploads/2016/01/kung-fu-panda-3.jpg?fit=910%2C564"
            alt="kungfu panda"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kung Fu Panda 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Po and his allies (Tigress, Monkey, Viper, Crane, Mantis) travel to Gongmen City to stop the evil peacock Lord Shen from conquering China, while also rediscovering Po's forgotten past.
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
              <Card sx={{minWidth:50, maxWidth:60}}>
                <CardActionArea href="https://www.netflix.com/title/70126574" target="_blank" >
                  <CardMedia
                        component="img"
                        height="60"
                        image={Netflix2}
                  />
                </CardActionArea>
              </Card>
            <Card sx={{minWidth:50, maxWidth: 60}}>
              <CardActionArea href="https://hulu.com" target="_blank">
                <CardMedia
                      component="img"
                      height="60"
                      image={hulu}
                />
              </CardActionArea>
            </Card>
            <Card sx={{minWidth:50, maxWidth: 60}}>
              <CardActionArea href="https://hbo.com" target="_blank">
                <CardMedia
                      component="img"
                      height="60"
                      image={HBO}
                />
              </CardActionArea>
            </Card>
            <AddToFavorites event={{addToFavorite}}/>
            <AddToList />
            </Stack>
          {/* </CardActions> */}
      </Card>
    );
}

