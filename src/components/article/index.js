import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Article = (props) => {
  let {
    title,
    description,
    content,
    author,
    url,
    urlToImage,
    source,
    publishedAt,
    _id,
  } = props.data;

  publishedAt = publishedAt
    .split("T")
    .join(" ")
    .split("Z")[0]
    .slice(0, publishedAt.length - 4);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link to={`/article/${_id}`}>
          <img src={urlToImage} alt={title}></img>
        </Link>
      </div>

      <div className={styles.contents}>
        <div className={styles.title}>
          <p>
            <Link to={`/article/${_id}`}>{title}</Link>
          </p>
        </div>
        <div className={styles.user}>
          <p className={styles.author}>{`By ${
            author || "Unknown"
          }, ${publishedAt}`}</p>
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
