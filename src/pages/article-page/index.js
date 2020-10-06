import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { getArticles } from "../../services/fetchArticles";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import ArticleInfo from "../../components/article-info";

const ArticlePage = () => {
  let { title } = useParams();
  const [article, setArticle] = useState(false);

  useEffect(() => {
    getArticles()
      .then((data) => {
        data.forEach((article) => {
          if (article.title === title) {
            setArticle(article);
            return;
          }
        });
      })
      .catch((err) => console.error(err));
  }, [article]);

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
