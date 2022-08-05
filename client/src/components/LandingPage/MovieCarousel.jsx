import React, { useEffect, useState } from 'react';
// import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Card, Grid } from '@mui/material';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MovieCard from './MovieCard.jsx';
// import '../style.css';
import Carousel from '../profile/Carousel.jsx';
import HoverCard from '../hoverCard/hoverCard.jsx';

const MovieCarousel = ({ header, apiMethod, user }) => {

    const [trendingList, setTrendingList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
      if (user) {
        apiMethod((err, res) => {
          if (err) {
            setError(err);
          } else {
            setTrendingList(res.data);
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

    }, [])

    return <Carousel name={header} arrOfMoviesObj={trendingList} ExpandedView={HoverCard}>{/*HoverCard*/}</Carousel>

//     const sliderItems = trendingList.length > 6 ? 6 : trendingList.length;
//     const items = [];
//     for (let i = 0; i < trendingList.length; i += sliderItems) {
//         if (i % sliderItems === 0) {
//         items.push(
//             <Card raised className="Banner" style={{ padding: 20 }} key={i.toString()}>
//             <Grid container spacing={0} className="BannerGrid">
//                 {trendingList.slice(i, i + sliderItems).map((movies, index) => {
//                 return <CarouselScreen key={index.toString()} item={movies} />;
//                 })}
//             </Grid>
//             </Card>
//         );
//         }
//     }
//     return (
//       <>
//         <p className="carousel-header">{header}</p>
//         <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
//         {items}
//         </Carousel>
//       </>
//     );

//   };


//   const CarouselScreen = (props) => {
//     return (
//         <Paper>
//             <MovieCard moviePoster={props.item.image} movieId={props.item.id}/>
//         </Paper>

}

export default MovieCarousel;