import React from 'react';
import Movie from './Movie';
import {Grid, Image, Button} from 'semantic-ui-react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// class MovieCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: this.props.movies.map(movie=> movie.iimage_thumb_url)
//     }
//   }
//
//   render() {
//     return (
//       <Carousel>
//
//       </Carousel>
//     )
//   }
// }


// function MovieCarousel(props) {
//   return (
//     <div className="Movie-Carousel">
//     <h1>MovieCarousel</h1>
//     {props.movies.map(movie => <Movie movie={movie}/>)}
//     </div>
//   )
// }

function MovieCarousel(props) {
  return (
    <Grid container columns={4} className="Movie-Carousel">
    {props.movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
      <Button onClick={props.handleMoreMovies}>More Movies!</Button>
    </Grid>
  )
}

export default MovieCarousel;
