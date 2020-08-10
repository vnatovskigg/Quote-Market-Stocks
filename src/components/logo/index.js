import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return <img src={logo} className={styles.logo}></img>;
};

export default Logo;
