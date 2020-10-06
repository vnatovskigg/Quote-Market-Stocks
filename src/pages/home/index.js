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
    let fetchedArticles = [];

    if (data.articles !== undefined) {
      data.articles.forEach(
        ({
          title,
          content,
          description,
          author,
          publishedAt,
          url,
          urlToImage,
          source,
        }) => {
          fetch("http://localhost:8888/api/articles", {
            method: "POST",
            body: JSON.stringify({
              title,
              content,
              description,
              author,
              publishedAt,
              url,
              urlToImage,
              source: source.name,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((createdArticle) => fetchedArticles.push(createdArticle))
            .catch((err) => console.log(err));
        }
      );
      return fetchedArticles;
    } else {
      setHasMore(false);
      return undefined;
    }
  };

  useEffect(() => {
    fetchArticles(articlePage).then((data) => {
      setArticles(data);
    });
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  // useEffect(() => {
  //   if (articles.length > 0 && articles.length <= 6) {
  //     fetch("http://localhost:8888/api/articles", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         articles,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setId(data._id);
  //       })
  //       .catch((err) => console.error(err));
  //   } else if (id && articles.length > 6) {
  //     fetch(`http://localhost:8888/api/articles/${id}`, {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         articles,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log("Articles were updated"))
  //       .catch((err) => console.error(err));
  //   }
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
                getArticles(articlePage).then((data) => {
                  if (data !== undefined) {
                    setArticles(data);
                    setArticlePage(articlePage + 1);
                  } else {
                    return;
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
