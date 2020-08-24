import React from "react";
import styles from "./index.module.css";

const Portfolio = (props) => {
  return (
    <div className={styles.portfolioStock}>
      <div className={styles.title}>
        <h3>{props.stock.companyName}</h3>
      </div>
      <div className={styles.price}>
        <h4>
          <small>Price: </small> ${props.stock.latestPrice}
        </h4>
      </div>
      <div className={styles.lows}>
        <h6 className={styles.high}>52 Week High ${props.stock.week52High}</h6>
        <h6 className={styles.low}>52 Week Low ${props.stock.week52Low}</h6>
      </div>
    </div>
  );
};

export default Portfolio;
