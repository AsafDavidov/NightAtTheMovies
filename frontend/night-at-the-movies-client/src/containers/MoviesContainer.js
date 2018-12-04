import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';
import { Button } from 'grommet';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const MOVIE_URL = 'http://localhost:4000/api/v1/movie_quotes'

const options = {
  position: 'bottom center',
  timeout: 2000,
  offset: '30px',
  transition: 'scale'
}


class MoviesContainer extends Component {
  state = {
    movies: [],
    movieIndex: 0,
    currentPage: 'home',
    latestScore: null
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
    let endIndex = this.state.movieIndex + 5
    return this.state.movies.slice(startIndex, endIndex)
  }

  handleNextMovieIndex = () => {
    this.setState((prevState) => ({movieIndex: prevState.movieIndex + 5}))
  }

  handleLatestScore = (newScore) => {
    this.setState({latestScore: newScore})
  }

  displayScore = () => {
    return this.state.latestScore ? <h1>Your score is: {this.state.latestScore}</h1> : null
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
        return (
          <AlertProvider template={AlertTemplate} {...options}>
            <GameContainer movies={this.moviesToDisplay()} handleNextMovieIndex={this.handleNextMovieIndex} handleLatestScore={this.handleLatestScore}/>
          </AlertProvider>
        )
    }
  }

  changeView = (newView) => {
    this.setState({currentPage: newView})
  }

  render() {
    return (
      <div className="Movies-Container">
        {this.displayScore()}
        {this.displayView()}
      </div>
    )
  }
}

export default MoviesContainer;
