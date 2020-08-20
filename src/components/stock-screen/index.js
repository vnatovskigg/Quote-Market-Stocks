import React, { useContext, useEffect, useState } from "react";
import Quote from "../stock-quote";
import styles from "./index.module.css";

function Screen() {
  useEffect(() => {}, []);

  return (
    <div className={styles["stock-screen"]}>
      {/* {watchlist.map((stock) => {
        return <Quote ticker={stock} />;
      })} */}
    </div>
  );
}

export default Screen;
