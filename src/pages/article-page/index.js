import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import ArticleInfo from "../../components/article-info";

const ArticlePage = () => {
  let { title } = useParams();
  const [article, setArticle] = useState(false);

  const fetchArticle = async () => {
    const res = await fetch(`http://localhost:8888/api/articles/`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchArticle(title)
      .then((data) => {
        data.forEach((article) => {
          if (article.title === title) {
            console.log("ARTICLE", article);
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
        {article ? <ArticleInfo article={article} /> : "Loading..."}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ArticlePage;
