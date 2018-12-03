import React from 'react';
import Movie from './Movie';
import Carousel from 'nuka-carousel';

class MovieCarousel extends React.Component {

  componentDidUpdate(prevProps) {
    console.log('previous props',prevProps);
  }

  render() {
    console.log(this.props.movies.length !=0);
    return (
      <Carousel disableKeyboardControls={true}>
      {this.props.movies.map((movie, index) => <Movie key={index} movie={movie} handleSelectMovie={this.props.handleSelectMovie} selectedMovieId={this.props.selectedMovieId}/>)}
      </Carousel>
    )
  }
}

// const checkCarousel = (props) => {
//   if (props.movies.length !== 0) {
//     return (
//       <Carousel disableKeyboardControls={true}>
//         {props.movies.map((movie, index) => <Movie key={index} movie={movie} handleSelectMovie={props.handleSelectMovie} selectedMovieId={props.selectedMovieId}/>)}
//       </Carousel>
//   )
//   }
// }
//
// function MovieCarousel(props) {
//   console.log(props.movies);
//   return (
//       <React.Fragment>
//         {checkCarousel(props)}
//       </React.Fragment>
//   );
// }


export default MovieCarousel;
