import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Article = (props) => {
  let {
    title,
    summary,
    published,
    author,
    url,
    thumbnail,
    uid,
    segment,
    _id,
  } = props.data;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link to={`/article/${_id}`}>
          <img src={thumbnail} alt={title}></img>
        </Link>
      </div>

      <div className={styles.contents}>
        <div className={styles.title}>
          <p>
            <Link to={`/article/${_id}`}>{title}</Link>
          </p>
        </div>
        <div className={styles.user}>
          <p className={styles.author}>{`By ${author}, ${published}`}</p>
        </div>
        <div className={styles.text}>
          <p>{summary}</p>
        </div>
        <div className={styles.readMore}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
