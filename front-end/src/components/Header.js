import React from 'react';
import Logo from '../assets/planeswalker-logo.png';
import '../css/Header.css';

function Header() {
  return (
    <div className="header">
      <div>
        <img className="logo" src={Logo} alt="Planeswalker spark"/>
      </div>
    </div>
  );
}

export default Header;
