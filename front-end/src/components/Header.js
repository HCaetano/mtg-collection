import React, { Component } from 'react';
import Logo from '../assets/planeswalker-logo.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img className="logo" src={Logo} />
        </div>
      </div>
    );
  }
}

export default Header;
