import React from "react";
import styles from "./index.module.css";

const Article = ({ author, title, url, imageUrl, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <a href={url} target="_blank">
          <img src={imageUrl} alt={title}></img>
        </a>
      </div>

      <div className={styles.contents}>
        <p>
          <a className={styles.title} href={url} target="_blank">
            {title}
          </a>
        </p>
        <p className={styles.text}>{content}</p>
        <div className={styles.user}>
          <span>
            <div>
              <a href={url} target="_blank" className={styles.read}>
                Read More
              </a>
            </div>
            <div>
              <small>Author: </small>
              {author || "Unknown"}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
