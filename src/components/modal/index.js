import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import styles from "./index.module.css";
import Quote from "../stock-quote";
import ModalArticle from "../modal-article";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const [articles, setArticles] = useState([]);
  const { name, ticker } = props.stock;

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  const getArticles = async (name) => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${name}&sortBy=popularity`,
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
      if (name !== undefined) {
        let stockName = name.split(" ")[0].toLowerCase();
        let data = await getArticles(stockName);
        data = data.slice(0, 3);
        setArticles(data);
      }
    }
    fetchData();
  }, [name]);

  if (display) {
    return (
      <div className={styles.container}>
        <div onClick={close} className={styles.backdrop} />
        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.stockInfo}>
            <Quote ticker={ticker} theme="dark" />
          </div>
          <div className={styles.newsContainer}>
            <div className={styles.newsTitle}>
              <h6>Related News</h6>
            </div>
            <div className={styles.newsFeed}>
              {articles.length > 0 ? (
                articles.map((article, index) => {
                  return <ModalArticle key={index} data={articles[index]} />;
                })
              ) : (
                <h6>Loading....</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
});

export default Modal;
