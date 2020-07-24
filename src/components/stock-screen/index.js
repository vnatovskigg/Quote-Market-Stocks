import React from "react";
import Quote from "../stock-quote";
import styles from "./index.module.css";

function Screen() {
  return (
    <div className={styles["stock-screen"]}>
      <Quote ticker="SPOT" />
      <Quote ticker="ATVI" />
      <Quote ticker="KO" />
      <Quote ticker="AAPL" />
      <Quote ticker="DIS" />
    </div>
  );
}

export default Screen;
