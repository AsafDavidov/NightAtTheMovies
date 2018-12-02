import React from 'react';
import Timer from '../components/GameComponents/Timer';
import PopBar from '../components/GameComponents/PopBar';
import MovieCarousel from '../components/GameComponents/MovieCarousel';
import MovieDetails from '../components/GameComponents/MovieDetails';

function GameContainer(props) {
  return (
    <div className="GameContainer">
      <h1>GameContainer Page</h1>
      <Timer />
      <PopBar />
      <MovieCarousel movies={props.movies} handleMoreMovies={props.handleMoreMovies}/>
      <MovieDetails />
    </div>
  )
}

export default GameContainer;
