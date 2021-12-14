import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/planeswalker-logo.png';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={ Logo } alt="Planeswalker spark" />
    </Link>
  </header>
);

export default Header;
