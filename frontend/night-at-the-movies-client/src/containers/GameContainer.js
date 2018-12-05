import React from 'react';
import Timer from '../components/GameComponents/Timer';
import PopBar from '../components/GameComponents/PopBar';
import MovieCarousel from '../components/GameComponents/MovieCarousel';
import MovieDetails from '../components/GameComponents/MovieDetails';
import { withAlert } from 'react-alert';
import { Alert } from 'react-alert';
// import AlertTemplate from "react-alert-template-basic";

class GameContainer extends React.Component {
  state ={
    selectedMovieId: null,
    answerInput: '',
    selectedHints: [],
    questionsAnswered:0,
    points: 0,
    timer:0,
    timerID:null
  }
  componentDidMount(){
    let timeID = setInterval(()=>{
      this.setState(()=>{
        return {timer: this.state.timer + 1}
      })
    },1000)
    this.setState({timerID:timeID})
  }

  handleAnswer = (e) => {
    this.setState({answerInput: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const movie = this.findSelectedMovieObj()
    if (movie.title.toLowerCase().includes(this.state.answerInput.toLowerCase())){
      this.setState((prevState) => {
        return {
        points: prevState.points + 20,
        questionsAnswered: prevState.questionsAnswered + 1,
        selectedMovieId: null,
        answerInput: '',
        selectedHints: []}
      },()=>{
        this.props.alert.show('Correct! Nice Job!',{type:"success"})
        if (this.state.questionsAnswered === 5 || this.state.points === 100) {
          this.handleStopTime("success")
        }})

    } else {
      this.setState((prevState) => {
         return {
          selectedMovieId: null,
          answerInput: '',
          selectedHints: [],
          questionsAnswered: prevState.questionsAnswered + 1}
      },()=>{
        this.props.alert.show('Oof must have been a typo',{type:"error"})
        if (this.state.questionsAnswered === 5 || this.state.points === 100) {
          this.handleStopTime("error")
        }})
    }
    this.props.handleNextMovieIndex()
  }
  handleHint = (hintNum) => {
    if (!this.state.selectedHints.includes(hintNum)) {
      this.setState((prevState)=>({selectedHints: [...prevState.selectedHints, hintNum]}))
    }
  }

  handleSelectMovie = (id) => {
    this.setState({selectedMovieId: id, selectedHints: [], alertStatus: null})
  }

  findSelectedMovieObj = () => {
    return this.props.movies.find(movie => movie.id === this.state.selectedMovieId);
  }

  handleStopTime = (status) => {
    clearInterval(this.state.timerID)
    this.props.handleLatestScore(this.state.timer, this.state.points)
  }

  render() {
    return (
      <div className="GameContainer">
        <Timer time={this.state.timer}
        handleStopTime={this.handleStopTime}/>
        <MovieCarousel
        movies={this.props.movies}
        handleSelectMovie={this.handleSelectMovie}
        selectedMovieId={this.state.selectedMovieId}
        />
        <div>
          {this.state.selectedMovieId ? <MovieDetails
            movie={this.findSelectedMovieObj()}
            answerInput={this.state.answerInput}
            handleAnswer={this.handleAnswer}
            handleSubmit={this.handleSubmit}
            handleHint={this.handleHint}
            selectedHints={this.state.selectedHints}
            />:null}
        </div>
          <PopBar score={this.state.points}/>
      </div>
    )
  }
}


export default withAlert(GameContainer);
