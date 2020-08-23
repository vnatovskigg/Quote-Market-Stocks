import React from "react";
import styles from "./index.module.css";

const ModalArticle = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <a href={props.data.url} target="_blank" rel="noopener noreferrer">
          {props.data.title}
        </a>
      </h3>
      <h6 className={styles.content}> {props.data.content} </h6>
    </div>
  );
};

export default ModalArticle;
