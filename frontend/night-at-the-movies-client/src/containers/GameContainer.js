import React from 'react';
import Timer from '../components/GameComponents/Timer';
import PopBar from '../components/GameComponents/PopBar';
import MovieCarousel from '../components/GameComponents/MovieCarousel';
import MovieDetails from '../components/GameComponents/MovieDetails';

function GameContainer() {
  return (
    <div className="GameContainer">
      <h1>GameContainer Page</h1>
      <Timer />
      <PopBar />
      <MovieCarousel />
      <MovieDetails />
    </div>
  )
}

export default GameContainer;
