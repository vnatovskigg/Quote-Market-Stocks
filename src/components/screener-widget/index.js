import React, { PureComponent } from "react";
import styles from "./index.module.css";

class StockTV extends PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  render() {
    return (
      <div className={styles.container} ref={this._ref}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "Nasdaq 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "BTC/USD",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "ETH/USD",
        },
      ],
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "regular",
      locale: "en",
    });
    this._ref.current.appendChild(script);
  }
}

export default StockTV;
