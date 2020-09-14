import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  let { title } = useParams();
  const [article, setArticle] = useState(false);

  const fetchArticle = async (title) => {
    const res = await fetch(`http://localhost:8888/api/articles/${title}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchArticle(title)
      .then((data) => {
        data.forEach((article) => {
          if (article.title === title) {
            setArticle(article);
            return;
          }
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Hello world!</h1>
      <p style={{ color: "blue" }}>{article ? article.title : "Loading"}</p>
    </div>
  );
};

export default ArticlePage;
