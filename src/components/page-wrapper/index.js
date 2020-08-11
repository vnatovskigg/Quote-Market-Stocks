import React from "react";
import Nav from "../navigation";
import Screen from "../stock-screen";
import Footer from "../footer";
import StockTV from "../screener-widget";
import styles from "./index.module.css";

function PageWrapper() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <Nav />
        <StockTV />
        <Screen />
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
