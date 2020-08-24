import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };
  return (
    <img
      src={logo}
      alt={"Stocks-Tracker"}
      className={styles.logo}
      onClick={goHome}
    ></img>
  );
};

export default Logo;
