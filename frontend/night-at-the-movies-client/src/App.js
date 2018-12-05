import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <NavBar />
        </header>
          <HomeContainer />
      </div>
    );
  }
}

export default App;
