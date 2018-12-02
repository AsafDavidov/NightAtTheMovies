import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';

const MOVIE_URL = 'http://localhost:4000/movies'

class MoviesContainer extends Component {
  state = {
    movies: [],
    movieIndex: 0
  }

  componentDidMount(){
    this.fetchAllMovies()
  }

  fetchAllMovies = () => {
    fetch(MOVIE_URL)
      .then(resp => resp.json())
      .then(data => this.setState({movies: data}))
  }

  moviesToDisplay() {
    let startIndex = this.state.movieIndex
    let endIndex = this.state.movieIndex + 3
    return this.state.movies.slice(startIndex, endIndex)
  }

  handleMoreMovies = () => {
    this.setState(prevState => {
      let newIndex;
      if (prevState.movieIndex+3 > prevState.movies.length) {
        newIndex = 0
      } else {
        newIndex = prevState.movieIndex + 3
      }
      return {movieIndex: newIndex}
    })
  }

  render() {
    return (
      <div className="Movies-Container">
        <p>Movies Container</p>
        <ViewStats />
        <GameContainer movies={this.moviesToDisplay()} handleMoreMovies={this.handleMoreMovies}/>
      </div>
    )
  }
}

export default MoviesContainer;
