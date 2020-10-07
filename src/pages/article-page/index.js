import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { getArticles } from "../../services/fetchArticles";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import ArticleInfo from "../../components/article-info";
import Spinner from "../../components/spinner";

const ArticlePage = () => {
  let { id } = useParams();
  const [article, setArticle] = useState(false);

  useEffect(() => {}, [article]);

  return (
    <PageWrapper>
      <ContentWrapper
        // title={article ? article.title : "Loading..."}
        layout="row"
      >
        {article ? <ArticleInfo article={article} /> : <Spinner />}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ArticlePage;
