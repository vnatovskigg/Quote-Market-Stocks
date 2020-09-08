import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Article = ({
  author,
  title,
  url,
  imageUrl,
  content,
  published,
  header,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link to={`/article/${header}`}>
          <img src={imageUrl} alt={title}></img>
        </Link>
      </div>

      <div className={styles.contents}>
        <div className={styles.title}>
          <p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </p>
        </div>
        <div className={styles.user}>
          <p className={styles.author}>{`By ${
            author || "Unknown"
          }, ${published}`}</p>
        </div>
        <div className={styles.text}>
          <p>{content}</p>
        </div>
        <div className={styles.readMore}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.read}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
