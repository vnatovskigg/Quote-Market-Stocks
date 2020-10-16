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
  console.log("ID", id);
  const [article, setArticle] = useState(false);

  const fetchArticle = async (articleId) => {
    let data = await getArticles()
    let article = data.find((e) => {
        return e._id = articleId;
      })

      return article
  }

  useEffect(() => {
    fetchArticle(id).then(returnedArticle => {
      console.log(returnedArticle);
      setArticle(returnedArticle)
    })
  }, [id]);

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
