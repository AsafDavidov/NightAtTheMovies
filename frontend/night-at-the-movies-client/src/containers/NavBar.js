import React from 'react';
import {Menu} from 'semantic-ui-react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Link, Redirect, NavLink, withRouter } from "react-router-dom";
import {withRouter} from 'react-router-dom'

function NavBar() {
  return (
    <Router>
      <React.Fragment>
        <h1 className="NavBar-header">Welcome to Night @ The Movies!</h1>
        <Menu>
          <Menu.Item name="Home" as={NavLink} to='/home'></Menu.Item>
          <Menu.Item name="Stats" onClick={()=> console.log('clicked Stat')}></Menu.Item>
        </Menu>
      </React.Fragment>
    </Router>
  )
}

// function NavBar() {
//   return (
//     <React.Fragment>
//     <h1 className="NavBar-header">Welcome to Night @ The Movies!</h1>
//     <Menu>
//       <Menu.Item name="Home" active={true} ></Menu.Item>
//       <Menu.Item name="Boop" active={false} ></Menu.Item>
//       <Menu.Item name="Gotcha!" active={false} ></Menu.Item>
//     </Menu>
//     </React.Fragment>
//   )
// }


export default withRouter(NavBar);
