import {Card, CardContent, CardMedia, Button, CardActionArea, CardActions, } from '@mui/material';
import {IconButton, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React, { useState } from 'react';
import AddToFavorites from './addToFavoritesButton';


export default function HoverCard() {
  const addToFavorite = e => {
    console.log('dog water')
  }

  const netflix = require('../../assets/netflix.png');
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
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
        <CardActions>
          <Button size="small" color="primary"
                endIcon={<img src={netflix} />}
          >
            Netflix
          </Button>
          <Button size="small" color="primary">
            Hulu
          </Button>
          <Button size="small" color="primary">
            Hbo
          </Button>
          <AddToFavorites event={{addToFavorite}}/>
        </CardActions>
      </Card>
    );
}

