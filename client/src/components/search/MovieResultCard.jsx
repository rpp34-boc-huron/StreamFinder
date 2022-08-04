import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';


const MovieResultCard = (props) => {
  const { movie } = props;
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  })

  const navigate = useNavigate();

  const useStyles = makeStyles({
    root: {
      maxWidth: 310,
      transition: "transform 0.15s ease-in-out"
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)",
      cursor: "pointer"
    }
  });

  const classes = useStyles();

  const handleClicked = (e) => {
    const tagName = e.target.tagName;
    console.log('tagName???', tagName)
    let id = e.target.parentElement.id;
    if (tagName === 'H5') {
      id = e.target.parentElement.parentElement.id;
    }
    navigate(`/movie/${id}`);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '16px 10px' }}
        className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true, shadow: 3 })}
        onMouseOut={() => setState({ raised: false, shadow: 1 })}
        raised={state.raised} zdepth={state.shadow}
      >
        <CardActionArea
          id={movie.id}
          onClick={handleClicked}
        >
          <CardMedia
            sx={{ height: '366px' }}
            component="img"
            image={
              movie.poster_path !== null
                ?
                `https://www.themoviedb.org/t/p/w185${movie.poster_path}`
                :
                'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'}
            alt='Image Not Supported'
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h5">
              {movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default MovieResultCard;