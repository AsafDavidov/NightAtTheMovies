import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import HomeContainer from './containers/HomeContainer';
import {Container} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <NavBar />
          </Container>
        </header>
          <Container>
          <HomeContainer />
          </Container>
      </div>
    );
  }
}

export default App;
