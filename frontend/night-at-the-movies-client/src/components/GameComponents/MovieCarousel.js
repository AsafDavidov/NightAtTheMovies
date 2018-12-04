import React from 'react';
import Movie from './Movie';
import Carousel from 'nuka-carousel';

// function MovieCarousel(props) {
//   console.log(props.movies);
//   return (
//     <Carousel disableKeyboardControls={true}>
//     {props.movies.map((movie, index) => <Movie key={index} movie={movie} handleSelectMovie={props.handleSelectMovie} selectedMovieId={props.selectedMovieId}/>)}
//     </Carousel>
//   )
// }

class MovieCarousel extends React.Component {
  componentDidMount() {
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render() {
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



export default MovieCarousel;
