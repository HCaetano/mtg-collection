import React from 'react';
import '../css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>
      Devolped by Havyner Caetano,
      {` ${new Date().getFullYear()}`}
      {' '}
      &#169;
    </div>
  </footer>
);

export default Footer;
