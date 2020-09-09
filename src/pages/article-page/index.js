import React from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";

const ArticlePage = (props) => {
  let { title } = useParams();
  console.log(title);
  return (
    <div>
      <h1 className={styles.title}>Hello world!</h1>
      <p className={styles.article}>{props.header}</p>
    </div>
  );
};

export default ArticlePage;
