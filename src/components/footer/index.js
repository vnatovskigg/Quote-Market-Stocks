import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <a href="https://github.com/vnatovskigg">© 2020 Velizar Natovski</a> |
        <a href="https://iexcloud.io/s/86eba30c"> Data provided by IEX Cloud</a>
      </p>
    </div>
  );
};

export default Footer;
