import React, { useContext, useEffect, useState } from "react";
import Quote from "../stock-quote";
import styles from "./index.module.css";
import UserContext from "../../Context";

function Screen() {
  const context = useContext(UserContext);
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    if (context.user !== null) {
      setStocks(context.user.stocks);
    }
  }, [context.user]);

  return (
    <div className={styles["stock-screen"]}>
      {stocks !== undefined && stocks.length > 0
        ? stocks.map((stock, index) => {
            if (index < 5) {
              return (
                <div key={index} className={styles.stock}>
                  <Quote key={stock.latestPrice} ticker={stock.symbol} />
                </div>
              );
            }
            return null;
          })
        : null}
    </div>
  );
}

export default Screen;
