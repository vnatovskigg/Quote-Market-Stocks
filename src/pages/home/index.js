import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import Article from "../../components/article";
import styles from "./index.module.css";
import MarketOverview from "../../components/market-overview";
import Spinner from "../../components/spinner";
import { getArticles, fetchArticles } from "../../services/fetchArticles";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  let { segment } = useParams();

  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  useEffect(() => {
    // const page = Math.ceil(articles.length / 6 + 1);
    fetchArticles(segment).then(async (returned) => {
      if (returned !== undefined) {
        let data = await getArticles();
        setArticles(data);
      }
    });
  }, []);

  return (
    <PageWrapper>
      <ContentWrapper date={today} layout="row"> 
          <div className={styles.news}>
            {/* <InfiniteScroll
              className={styles.newsElement}
              dataLength={articles.length}
              height={"660px"}
              next={() => {
                const page = Math.ceil(articles.length / 6 + 1);
                fetchArticles(page).then(async (returned) => {
                  if (returned !== undefined) {
                    let data = await getArticles();
                    setArticles(data);
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
            > */}


              {articles.map((article) => {
                return <Article key={article._id} data={article} />;
              })}

              
            {/* </InfiniteScroll> */}
          </div>
          <div className={styles.aside}>
            <MarketOverview />
          </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default NewsPage;
