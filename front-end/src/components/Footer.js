import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>Devolped by Havyner Caetano, {new Date().getFullYear()} &#169;</div>
      </footer>
    );
  }
}

export default Footer;
