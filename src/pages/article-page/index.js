import React, { useEffect, useState, Component } from "react";
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
  const [_id, setId] = useState('');

  const fetchArticle = async (articleId) => {
    let data = await getArticles()
    let article = data.find((e) => {
        return e._id === articleId
      })
      return article
  }

  useEffect(() => {
    fetchArticle(_id).then(returnedArticle => {
      if(returnedArticle) {
        setArticle(returnedArticle)
      }
    })
  }, [_id]);

  useEffect(() => {
    if (id !== _id) {
      setId(id)
    }
  })

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
