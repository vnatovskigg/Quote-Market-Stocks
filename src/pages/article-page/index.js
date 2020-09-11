import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";

const ArticlePage = (props) => {
  let { title } = useParams();
  const [article, setArticle] = useState({});

  const fetchArticle = async (title) => {
    const res = await fetch(`http://localhost:8888/api/articles/${title}`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchArticle(title);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Hello world!</h1>
      <p className={styles.article}>{props.header}</p>
    </div>
  );
};

export default ArticlePage;
