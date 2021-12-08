import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/planeswalker-logo.png';
import '../css/Header.css';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="logo" src={ Logo } alt="Planeswalker spark" />
    </Link>
  </header>
);

export default Header;
