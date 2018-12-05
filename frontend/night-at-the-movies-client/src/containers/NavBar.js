import React from 'react';
import {Menu} from 'semantic-ui-react';
import './NavBar.css';
// https://react.semantic-ui.com/collections/menu/#types-basic

function NavBar() {
  return (
    <React.Fragment>
    <h1 className="NavBar-header">Welcome to Night @ The Movies!</h1>
    <Menu>
      <Menu.Item name="Home" active={true} ></Menu.Item>
      <Menu.Item name="Boop" active={false} ></Menu.Item>
      <Menu.Item name="Gotcha!" active={false} ></Menu.Item>
    </Menu>
    </React.Fragment>
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


export default NavBar;
