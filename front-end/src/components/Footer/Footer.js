import React from "react";
import styles from "./styles.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      Developed by Havyner Caetano,
      {` ${new Date().getFullYear()}`} &#169;
    </div>
  </footer>
);

export default Footer;
