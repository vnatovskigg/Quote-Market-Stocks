import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import styles from "./index.module.css";

function Quote(props) {
  const [state, setState] = useState({
    quote: {},
    changeIsPositive: true,
  });

  const API_KEY = "JMDFANIQC0K37BFZ";
  const yahooFinanceURL = `https://finance.yahoo.com/quote/`;
  const stockData = {
    SPOT: "Spotify Technology",
    AAPL: "Apple Inc.",
    ATVI: "Activision Blizzard",
    DIS: "Walt Disney Co",
    KO: "Coca-Cola Co",
  };

  const nameMatch = Object.keys(stockData).find((key) => key === props.ticker);
  const name = stockData[nameMatch] + ` (${nameMatch})`;

  useEffect(() => {
    fetch(
      // `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${props.ticker}&apikey=${API_KEY}`
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${props.ticker}&apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const price = Number(data["Global Quote"]["05. price"]).toFixed(2);
        const diff = Number(data["Global Quote"]["09. change"]).toFixed(2);
        const changePercent = data["Global Quote"]["10. change percent"];
        const change = Number(
          changePercent.slice(0, changePercent.length - 1)
        ).toFixed(2);

        setState({
          quote: {
            price,
            diff,
            change,
            name,
          },
          changeIsPositive: diff < 0 ? false : diff > 0 ? true : "",
        });
      });
  }, []);

  let displayPrice =
    state.quote.diff > 0
      ? `+${state.quote.diff} (+${state.quote.change}%) `
      : `${state.quote.diff} (${state.quote.change}%) `;

  return (
    <div className={styles.quote}>
      <h3 className={styles["stock-name"]}>
        <a href={`${yahooFinanceURL}${props.ticker}`} target="_blank">
          {state.quote.name}
        </a>
      </h3>

      <h4 className={styles["stock-price"]}>${state.quote.price}</h4>

      <p
        className={
          state.changeIsPositive
            ? styles["stock-price-change-pos"]
            : state.quote.diff !== 0
            ? styles["stock-price-change-negative"]
            : styles["stock-price-change-none"]
        }
      >
        {displayPrice}
        {state.changeIsPositive ? (
          <AiOutlineCaretUp />
        ) : state.quote.diff !== 0 ? (
          <AiOutlineCaretDown />
        ) : (
          <AiOutlineCaretRight />
        )}
      </p>
    </div>
  );
}

export default Quote;
