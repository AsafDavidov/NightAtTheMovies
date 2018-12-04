import React, {Component} from 'react';
import Login from '../components/Login';
import MoviesContainer from './MoviesContainer';
import {Grommet} from 'grommet';

const BASE = 'http://localhost:4000/api/v1/'
const USER_URL = BASE+'users'

class HomeContainer extends Component {
  state = {
    user: {}
  }

  handleLogin = (e) => {
    e.preventDefault();
    let data = {name: e.target.querySelector('input').value}
    fetch(USER_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => this.setState({user: data}))
  }



  render() {
    return (
      <div className="Home-Container">
        {!!this.state.user.name ? <MoviesContainer user={this.state.user}/> : <Login handleLogin={this.handleLogin}/>}
      </div>
    )
  }
}

export default HomeContainer;
