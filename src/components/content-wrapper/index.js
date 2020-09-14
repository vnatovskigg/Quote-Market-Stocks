import React from "react";
import styles from "./index.module.css";

const ContentWrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{props.title}</h1>
        <span className={styles.today}>{props.date}</span>
      </div>
      <div className={styles[`content-${props.layout}`]}>{props.children}</div>
    </div>
  );
};

export default ContentWrapper;
