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

  console.log(stocks);
  return (
    <div className={styles["stock-screen"]}>
      {/* {stocks.length > 1
        ? stocks.map((stock) => {
            return <Quote ticker={stock.symbol} />;
          })
        : null} */}
    </div>
  );
}

export default Screen;
