import React, {Component} from 'react';
import ViewStats from '../components/ViewStats';
import GameContainer from './GameContainer';
import { Button } from 'grommet';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const BASE = 'http://localhost:4000/api/v1/'
const MOVIE_URL = BASE+'movie_quotes'
const GAME_URL = BASE+'games'

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

  postGameStat = (points) => {
    let data = {user_id: this.props.user.id, time_taken: this.state.latestScore, points: points}

    fetch(GAME_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(data)
    })
  }

  moviesToDisplay() {
    let startIndex = this.state.movieIndex
    if (startIndex === 200) {
      startIndex = 0
      this.setState({movieIndex: 0})
    }
    let endIndex = this.state.movieIndex + 5
    return this.state.movies.slice(startIndex, endIndex)
  }

  handleNextMovieIndex = () => {
    this.setState((prevState) => ({movieIndex: prevState.movieIndex + 5}))
  }

  handleLatestScore = (newScore, points) => {
    this.setState({latestScore: newScore}, ()=>{
      this.postGameStat(points)
      this.changeView('home')
    })
  }

  displayScore = () => {
    return this.state.latestScore ? <h1>Your latest score is: {this.state.latestScore}</h1> : null
  }

  displayView = () => {
    switch (this.state.currentPage) {
      case 'home':
        return (
          <div style={{paddingTop: 150}}>
            {this.displayScore()}
            <Button label="View Stats"onClick={()=>this.changeView('stats')} style={{padding: 50, margin: 30}}/>
            <Button label="Start Game"onClick={()=>this.changeView('game')} style={{padding: 50, margin: 30}}/>
          </div>
        );
      case 'stats':
        return <ViewStats user={this.props.user}/>
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
        {this.displayView()}
      </div>
    )
  }
}

export default MoviesContainer;
