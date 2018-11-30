import React, {Component} from 'react';
import Login from '../components/Login';
import MoviesContainer from './MoviesContainer';

class HomeContainer extends Component {
  render() {
    return (
      <div className="Home-Container">
        <p>Home Container</p>
        <Login />
        <MoviesContainer />
      </div>
    )
  }
}

export default HomeContainer;
