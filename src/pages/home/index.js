import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import Article from "../../components/article";
import styles from "./index.module.css";
import MarketOverview from "../../components/market-overview";
import Spinner from "../../components/spinner";
import { getArticles, fetchArticles, depositData } from "../../services/fetchArticles";

const NewsPage = () => {
  const [articles, setArticles] = useState(null);
  let { segment } = useParams();

  var today = new Date();
  today = JSON.stringify(today).slice(1, 11);

  useEffect(() => {
    setArticles(null);
    async function renderArticles() {
      let fetched = await fetchArticles(segment);
      console.log("FETCHED ", fetched);
      console.log("DEPOSIT ARTICLES ", await depositData(fetched, segment || 'latest'))
      let data = await getArticles(segment || 'latest');
      setArticles(data);
    }
    renderArticles();
    
  }, [segment]);

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


              {
              articles ? 
              articles.map((article) => {
                return <Article key={article._id} data={article} />;
              }) :
              <Spinner />
            }

              
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
