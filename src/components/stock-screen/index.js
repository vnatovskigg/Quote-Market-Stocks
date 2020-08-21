import React, { useContext, useEffect, useState } from "react";
import Quote from "../stock-quote";
import styles from "./index.module.css";
import UserContext from "../../Context";

function Screen() {
  const context = useContext(UserContext);
  const [stocks, setStocks] = useState({});

  useEffect(() => {
    if (context.user !== null) {
      console.log(context.user);
      setStocks(context.user.stocks);
    }
  }, [context.user]);

  return (
    <div className={styles["stock-screen"]}>
      {stocks !== undefined && stocks.length > 0
        ? stocks.map((stock) => {
            return <Quote key={stock.latestPrice} ticker={stock.symbol} />;
          })
        : null}
    </div>
  );
}

export default Screen;
