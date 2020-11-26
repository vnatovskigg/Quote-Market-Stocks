import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
import useScript from '../../hooks/useScript';

const MarketOverview = () => {
  const [theme, setTheme] = useState('dark');
  const ref = useRef();

  useScript("https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js", ref, theme)
  
  const changeTheme = () => {
    if (theme === "dark") {
        setTheme('light')
      } else {
        setTheme('dark')
    }
  }


  return (
   
    <div className={styles.container} ref={ref}>
       <div className={styles.dashboard}>
         {theme === "dark" ? <BsSun className={styles.switch} onClick={changeTheme}/> : <BsMoon className={styles.switch} onClick={changeTheme}/>}      
       </div>
    </div>
  )
}


export default MarketOverview;
