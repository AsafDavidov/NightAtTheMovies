import React from 'react';
import Movie from './Movie';
import Carousel from 'nuka-carousel';

class MovieCarousel extends React.Component {
  componentDidMount() {
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 0);
  }

  render() {
    return (
        <Carousel className="slider-list" disableKeyboardControls={true} renderBottomCenterControls={null} cellAlign="center">
          {this.props.movies.map((movie, index) => <Movie key={index} movie={movie} handleSelectMovie={this.props.handleSelectMovie} selectedMovieId={this.props.selectedMovieId}/>)}
        </Carousel>
    )
  }
}

export default MovieCarousel;
