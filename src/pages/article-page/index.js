import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";

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
    <PageWrapper>
      <ContentWrapper
        // title={article ? article.title : "Loading..."}
        layout="row"
      >
        <div className={styles.articleContainer}>
          <h1>Article Section</h1>
        </div>
        <div className={styles.aside}>
          <h1>Suggestions Aside</h1>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ArticlePage;
