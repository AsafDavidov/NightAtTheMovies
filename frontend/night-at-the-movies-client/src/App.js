import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./containers/NavBar";
import HomeContainer from "./containers/HomeContainer";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <HomeContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
