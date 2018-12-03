import React from 'react';
import Timer from '../components/GameComponents/Timer';
import PopBar from '../components/GameComponents/PopBar';
import MovieCarousel from '../components/GameComponents/MovieCarousel';
import MovieDetails from '../components/GameComponents/MovieDetails';

class GameContainer extends React.Component {
  state ={
    selectedMovieId: null,
    answerInput: '',
    selectedHints: []
  }

  handleAnswer = (e) => {
    this.setState({answerInput: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handleSubmit',e.target.parentElement);
    debugger;
  }

  handleHint = (hintNum) => {
    if (!this.state.selectedHints.includes(hintNum)) {
      this.setState((prevState)=>({selectedHints: [...prevState.selectedHints, hintNum]}))
    }
  }

  handleSelectMovie = (id) => {
    console.log('in handleSelectMovie', id);
    this.setState({selectedMovieId: id, selectedHints: []}, ()=>console.log('in handleSelectMovie', this.state))
  }

  findSelectedMovieObj = () => {
    return this.props.movies.find(movie => movie.id === this.state.selectedMovieId);
  }

  render() {
    return (
      <div className="GameContainer">
      <h1>GameContainer Page</h1>
      <Timer />
      <PopBar />
      <MovieCarousel
      movies={this.props.movies}
      handleSelectMovie={this.handleSelectMovie}
      selectedMovieId={this.state.selectedMovieId}
      />
      {this.state.selectedMovieId ? <MovieDetails
        movie={this.findSelectedMovieObj()}
        answerInput={this.state.answerInput}
        handleAnswer={this.handleAnswer}
        handleSubmit={this.handleSubmit}
        handleHint={this.handleHint}
        selectedHints={this.state.selectedHints}
        /> : null}
      </div>
    )
  }
}

export default GameContainer;
