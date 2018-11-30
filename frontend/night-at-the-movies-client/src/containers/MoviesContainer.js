import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';

class MoviesContainer extends Component {
  render() {
    return (
      <div className="Movies-Container">
        <p>Movies Container</p>
        <ViewStats />
        <GameContainer />
      </div>
    )
  }
}

export default MoviesContainer;
