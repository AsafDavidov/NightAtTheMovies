import React, {Component} from 'react';
import Login from '../components/Login';
import MoviesContainer from './MoviesContainer';

class HomeContainer extends Component {
  state = {
    loginStatus: true
  }

  handleLogin = (e) => {
    e.preventDefault();
    if (this.state.loginStatus) {
      this.setState({loginStatus: false})
    } else {
      this.setState({loginStatus: true})
    }
  }

  render() {
    return (
      <div className="Home-Container">
        <p>Home Container</p>
        {this.state.loginStatus ? <MoviesContainer /> : <Login handleLogin={this.handleLogin}/>}


      </div>
    )
  }
}

export default HomeContainer;
