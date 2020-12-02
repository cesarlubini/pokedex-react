import React, { Component } from 'react';
import './MainMenu.css';
import Logo from '../Logo';

class MainMenu extends Component {

  render() {
    return(
      <nav className="main-menu">
        <Logo/>
        <ul className="menu">
          <li className="menu__item"><a href="#">Home</a></li>
          <li className="menu__item"><a href="#">About</a></li>
        </ul>
      </nav>
    )
  }

}

export default MainMenu;