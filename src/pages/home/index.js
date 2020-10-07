import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import Article from "../../components/article";
import styles from "./index.module.css";
import MarketOverview from "../../components/market-overview";
import Spinner from "../../components/spinner";
import { getArticles } from "../../services/fetchArticles";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [articlePage, setArticlePage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  const fetchArticles = async (page) => {
    const res = await fetch(
      `http://newsapi.org/v2/everything?q=markets&language=en&sortBy=popularity&pageSize=6&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    const data = await res.json();

    if (data.articles !== undefined) {
      data.articles.map(
        async ({
          title,
          description,
          author,
          content,
          publishedAt,
          url,
          urlToImage,
          source,
        }) => {
          const req = await fetch(`http://localhost:8888/api/articles/`, {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
              content,
              author,
              publishedAt,
              url,
              urlToImage,
              source: source.name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      );
      return "Articles added to db";
    } else {
      setHasMore(false);
      return undefined;
    }
  };

  useEffect(() => {
    fetchArticles(articlePage).then(async (returned) => {
      if (returned !== undefined) {
        let data = await getArticles();
        setArticles(data);
        setArticlePage(articlePage + 1);
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log(articles);
  // }, [articles]);

  return (
    <PageWrapper>
      <ContentWrapper date={today} layout="row">
        <div className={styles.container}>
          <div className={styles.news}>
            <InfiniteScroll
              className={styles.newsElement}
              dataLength={articles.length}
              height={"660px"}
              next={() => {
                fetchArticles(articlePage).then(async (returned) => {
                  if (returned !== undefined) {
                    let data = await getArticles();
                    setArticles(data);
                    setArticlePage(articlePage + 1);
                  }
                });
              }}
              hasMore={hasMore}
              endMessage={
                <p className={styles.endScroll}>
                  <b>You are all caught up :))</b>
                </p>
              }
              scrollThreshold={1}
              loader={<Spinner />}
            >
              {articles.map((article) => {
                return <Article data={article} />;
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
