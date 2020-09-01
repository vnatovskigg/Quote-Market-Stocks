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
  const [hasMore, setHasMore] = useState(true);
  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  const getArticles = async (page) => {
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=markets&language=en&sortBy=popularity&pageSize=6&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    let updatedArticles;
    const data = await res.json();
    if (data) {
      updatedArticles = articles.concat(data.articles);
    }
    return undefined;
  };

  useEffect(() => {
    getArticles(articlePage).then((data) => {
      console.log(data);
      if (data) {
        setArticles(data);
        setArticlePage(articlePage + 1);
      } else {
        setHasMore(false);
      }
    });
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper date={today}>
        <div className={styles.container}>
          <div className={styles.news}>
            <InfiniteScroll
              dataLength={articles.length}
              height={"660px"}
              next={() => {
                getArticles(articlePage).then((data) => {
                  console.log(data);
                  if (data) {
                    setArticles(data);
                    setArticlePage(articlePage + 1);
                  } else {
                    setHasMore(false);
                  }
                });
              }}
              hasMore={hasMore ? true : false}
              endMessage={
                <p className={styles.endScroll}>
                  <b>You are all caught up :))</b>
                </p>
              }
              scrollThreshold={1}
              loader={<h4>Loading...</h4>}
            >
              {articles.map((article, i) => {
                if (article) {
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
                } else {
                  return;
                }
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
