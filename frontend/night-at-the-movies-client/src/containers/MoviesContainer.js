import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';

const MOVIE_URL = 'http://localhost:4000/movies'

class MoviesContainer extends Component {
  state = {
    Movies: []
  }

  componentDidMount(){
    // this.fetchAllMovies
  }

  fetchAllMovies = () => {

  }


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
