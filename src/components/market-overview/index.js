import React, { PureComponent } from "react";
import styles from "./index.module.css";

class MarketOverview extends PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12m",
      showChart: true,
      locale: "en",
      width: "100%",
      height: "100%",
      largeChartUrl: "",
      isTransparent: false,
      plotLineColorGrowing: "rgba(73, 133, 231, 1)",
      plotLineColorFalling: "rgba(33, 150, 243, 1)",
      gridLineColor: "rgba(240, 243, 250, 1)",
      scaleFontColor: "rgba(120, 123, 134, 1)",
      belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
      belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
      symbolActiveColor: "rgba(33, 150, 243, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            {
              s: "FOREXCOM:SPXUSD",
              d: "S&P 500",
            },
            {
              s: "FOREXCOM:NSXUSD",
              d: "Nasdaq 100",
            },
            {
              s: "FOREXCOM:DJI",
              d: "Dow 30",
            },
            {
              s: "INDEX:NKY",
              d: "Nikkei 225",
            },
            {
              s: "INDEX:DEU30",
              d: "DAX Index",
            },
            {
              s: "FOREXCOM:UKXGBP",
              d: "FTSE 100",
            },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Commodities",
          symbols: [
            {
              s: "CME_MINI:ES1!",
              d: "E-Mini S&P",
            },
            {
              s: "CME:6E1!",
              d: "Euro",
            },
            {
              s: "COMEX:GC1!",
              d: "Gold",
            },
            {
              s: "NYMEX:CL1!",
              d: "Crude Oil",
            },
            {
              s: "NYMEX:NG1!",
              d: "Natural Gas",
            },
            {
              s: "CBOT:ZC1!",
              d: "Corn",
            },
          ],
          originalTitle: "Commodities",
        },
        {
          title: "Forex",
          symbols: [
            {
              s: "FX:EURUSD",
            },
            {
              s: "FX:GBPUSD",
            },
            {
              s: "FX:USDJPY",
            },
            {
              s: "FX:USDCHF",
            },
            {
              s: "FX:AUDUSD",
            },
            {
              s: "FX:USDCAD",
            },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Crypto",
          symbols: [
            {
              s: "BITBAY:BTCUSD",
              d: "BTC/USD",
            },
            {
              s: "KRAKEN:ETHUSD",
              d: "ETH/USD",
            },
            {
              s: "CURRENCYCOM:XRPUSD",
              d: "RPPL/USD",
            },
            {
              s: "COINBASE:LTCUSD",
              d: "LTC/USD",
            },
          ],
        },
      ],
    });
    this._ref.current.appendChild(script);
  }

  render() {
    return (
      <div className={styles.container} ref={this._ref}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}

export default MarketOverview;
