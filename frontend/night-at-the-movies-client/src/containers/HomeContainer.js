import React, { Component } from "react";
import Login from "../components/Login";
import MoviesContainer from "./MoviesContainer";
import { Grommet } from "grommet";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { SET_USER } from "../store/types";

const BASE = "http://localhost:4000/api/v1/";
const USER_URL = BASE + "users";

const MoviesContainer2 = (user, handleLogin) =>
  user.id ? (
    <MoviesContainer />
  ) : (
      <Login handleLogin={handleLogin} />
    );
const Login2 = handleLogin => <Login handleLogin={handleLogin} />;

class HomeContainer extends Component {
  state = {
    user: {}
  };

  handleLogin = e => {
    e.preventDefault();
    let data = { name: e.target.querySelector("input").value };
    fetch(USER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.loadUser(data);
        this.setState({ user: data });
      });
  };

  render() {
    return (
      <div className="Home-Container">
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => {
                return this.props.user ? ( // <-Change me
                  <Redirect to="/home" />
                ) : (
                    <Login handleLogin={this.handleLogin} />
                  );
              }}
            />

            <Route
              path="/home"
              component={() =>
                MoviesContainer2(this.props.user, this.handleLogin)
              }
            />
          </div>
        </Router>
      </div>
    );
  }
} // end HomeContainer class
//
// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/dashboard"/>
//   ) : (
//     <PublicHomePage/>
//   )
// )}/>
// {!!this.state.user.name ? <MoviesContainer user={this.state.user}/> : <Login handleLogin={this.handleLogin}/>}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => {
  return {
    loadUser: userObj => dispatch({ type: SET_USER, payload: userObj })
  };
};

const ConnectedHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

export default ConnectedHomeContainer;
