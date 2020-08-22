import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import styles from "./index.module.css";
import Quote from "../stock-quote";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
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

  if (display) {
    return (
      <div className={styles.container}>
        <div onClick={close} className={styles.backdrop} />
        <div className={styles.content}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.stockInfo}>
            <Quote ticker={ticker} theme="dark" />
          </div>
          <div className={styles.newsFeed}></div>
        </div>
      </div>
    );
  }

  return null;
});

export default Modal;
