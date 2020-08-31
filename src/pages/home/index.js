import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import Article from "../../components/article";
import styles from "./index.module.css";
import MarketOverview from "../../components/market-overview";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [articlePage, setArticlePage] = useState(1);
  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  const getArticles = async (page) => {
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=markets&language=en&sortBy=popularity&pageSize=6&page=${page}`,
      {
        headers: {
          "X-Api-Key": "e2106b473b3e4f678ac492c1af2d052e",
        },
      }
    );

    const data = await res.json();
    let updatedArticles = articles.concat(data.articles);

    return updatedArticles;
  };

  useEffect(() => {
    getArticles(articlePage).then((data) => {
      setArticles(data);
      setArticlePage(articlePage + 1);
    });
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper date={today}>
        <div className={styles.container}>
          <div className={styles.news}>
            <InfiniteScroll
              dataLength={articles.length}
              next={() => {
                getArticles(articlePage).then((data) => {
                  setArticles(data);
                  console.log(articlePage);
                  setArticlePage(articlePage + 1);
                });
              }}
              hasMore={true}
              scrollThreshold={1}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
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
            </InfiniteScroll>
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
