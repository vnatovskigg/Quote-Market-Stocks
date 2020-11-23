import React, { useState, useEffect, useContext } from "react";
import {
  AiOutlineCaretRight,
  AiFillStar,
  AiOutlineCaretUp,
  AiOutlineCaretDown,
} from "react-icons/ai";
import styles from "./index.module.css";
import UserContext from "../../Context";

function Quote(props) {
  const [state, setState] = useState({
    quote: {},
    changeIsPositive: true,
  });

  const context = useContext(UserContext);

  const yahooFinanceURL = `https://finance.yahoo.com/quote/`;
  const api_key = process.env.REACT_APP_MARKET_API_KEY;

  useEffect(() => {
    const getData = async (tick) => {
      const res = await fetch(
        `https://cloud.iexapis.com/stable/stock/${tick}/quote?token=${api_key}`
      );
      const data = await res.json();
      const {
        latestPrice,
        change,
        changePercent,
        companyName,
        week52High,
        week52Low,
      } = data;
      
      setState({
        quote: {
          latestPrice: latestPrice.toFixed(2),
          change: change.toFixed(2),
          changePercent: (changePercent * 100).toFixed(2),
          companyName,
          week52High: week52High.toFixed(2),
          week52Low: week52Low.toFixed(2),
          symbol: props.ticker,
        },
        changeIsPositive: change < 0 ? false : change > 0 ? true : "",
      });
    };
    getData(props.ticker);
  }, [props.ticker, api_key]);

  let displayPrice =
    state.quote.change > 0
      ? `+${state.quote.change} (+${state.quote.changePercent}%) `
      : `${state.quote.change} (${state.quote.changePercent}%) `;

  return (
    <div className={props.theme === "light" ? styles.quote : styles.quoteDark}>
      <div className={styles.header}>
        <h3 className={styles["stock-name"]}>
          <a
            href={`${yahooFinanceURL}${props.ticker}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {state.quote.companyName}
          </a>
        </h3>
        {context.user.loggedIn ? (
          <AiFillStar
            onClick={() => {
              context.addToWatchlist(state.quote, context.user.id);
            }}
            className={styles.favourite}
          />
        ) : null}
      </div>
      <div className={styles["stock-price"]}>
        <h4>${state.quote.latestPrice}</h4>
      </div>
      <div className={styles.changeWrapper}>
        <p
          className={
            state.changeIsPositive
              ? styles["stock-price-change-pos"]
              : state.quote.change !== 0
              ? styles["stock-price-change-negative"]
              : styles["stock-price-change-none"]
          }
        >
          {displayPrice}
          {state.changeIsPositive ? (
            <AiOutlineCaretUp />
          ) : state.quote.change !== 0 ? (
            <AiOutlineCaretDown />
          ) : (
            <AiOutlineCaretRight />
          )}
        </p>
      </div>
    </div>
  );
}

export default Quote;
