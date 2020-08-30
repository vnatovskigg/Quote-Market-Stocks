import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import Article from "../../components/article";
import styles from "./index.module.css";
import MarketOverview from "../../components/market-overview";

const Home = () => {
  const [articles, setArticles] = useState([]);
  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  const getArticles = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=cnn",
      {
        headers: {
          "X-Api-Key": "e2106b473b3e4f678ac492c1af2d052e",
        },
      }
    );

    const data = await res.json();
    return data.articles;
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getArticles();
      setArticles(data);
    }
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper date={today}>
        <div className={styles.container}>
          <div className={styles.news}>
            {articles.map((article, i) => {
              return (
                <Article
                  key={i}
                  title={article.title}
                  author={article.author}
                  content={article.content}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  published={article.publishedAt.slice(11, 16)}
                />
              );
            })}
          </div>
          <div className={styles.aside}>
            <MarketOverview />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
