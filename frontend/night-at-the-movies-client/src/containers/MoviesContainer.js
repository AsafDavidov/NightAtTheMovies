import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';
import { Button } from 'grommet';

const MOVIE_URL = 'http://localhost:4000/api/v1/movie_quotes'

class MoviesContainer extends Component {
  state = {
    movies: [],
    movieIndex: 0,
    currentPage: 'home'
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
    let endIndex = this.state.movieIndex + 10
    return this.state.movies.slice(startIndex, endIndex)
  }

  displayView = () => {
    switch (this.state.currentPage) {
      case 'home':
        return (
          <React.Fragment>
            <Button label="View Stats"onClick={()=>this.changeView('stats')}/>
            <Button label="Start Game"onClick={()=>this.changeView('game')}/>
          </React.Fragment>
        );
      case 'stats':
        return <ViewStats />
      case 'game':
        return <GameContainer movies={this.moviesToDisplay()}/>
    }
  }

  changeView = (newView) => {
    this.setState({currentPage: newView})
  }

  render() {
    return (
      <div className="Movies-Container">
        <p>Movies Container</p>
        {this.displayView()}
      </div>
    )
  }
}

export default MoviesContainer;
