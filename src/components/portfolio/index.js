import React from "react";
import styles from "./index.module.css";

const Portfolio = (props) => {
  return (
    <div className={styles.portfolioStock}>
      <h3>{props.stock.companyName}</h3>
      <h4 className={styles.price}>
        <small>Price: </small> ${props.stock.latestPrice}
      </h4>
      <h6 className={styles.high}>52 Week High ${props.stock.week52High}</h6>
      <h6 className={styles.low}>52 Week Low ${props.stock.week52Low}</h6>
    </div>
  );
};

export default Portfolio;
