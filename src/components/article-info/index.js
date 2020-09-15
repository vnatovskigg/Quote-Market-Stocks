import React from "react";
import styles from "./index.module.css";

const ArticleInfo = ({ article }) => {
  let date = article.publishedAt.split("T").join(" ");
  date = date.split("Z")[0];
  console.log("article-content", article.content);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{article.title}</h1>
      </div>
      <div className={styles.sourceInfo}>
        <span className={styles.source}>
          <small>Source:</small>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >{`   ${article.source.name}`}</a>
        </span>
        <span className={styles.source}>
          <small>By:</small>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >{`   ${article.author}`}</a>
        </span>
        <span className={styles.createdAt}>
          <small>{`Published:   ${date}`}</small>
        </span>
      </div>
      <div className={styles.poster}>
        <img src={article.urlToImage}></img>
      </div>
      <div className={styles.content}>{article.content}</div>
    </div>
  );
};

export default ArticleInfo;
