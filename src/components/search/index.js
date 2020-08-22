import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styles from "./index.module.css";
import TickerSymbols from "../../services/data";
import Modal from "../modal";

const Search = () => {
  const modalRef = React.useRef();
  const [openSearch, setOpenSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [stock, setStock] = useState({});

  const openModal = () => {
    modalRef.current.openModal();
  };

  const onTextChanged = (e) => {
    const value = e.target.value.toLowerCase();

    if (value.length === 0) {
      setSuggestions([]);
    }

    if (value.length > 1) {
      const g = TickerSymbols.filter(
        (f) => JSON.stringify(f).toLowerCase().indexOf(value) !== -1
      );

      setSuggestions(g);
    }

    setText(value);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <div className={styles.suggestions}>
        <ul>
          {suggestions.map((item) => (
            <li
              key={item.symbol}
              onClick={() => {
                openModal();
                setText("");
                setSuggestions([]);
                setStock({
                  name: item.name,
                  ticker: item.symbol,
                });
              }}
            >{`(${item.symbol}) ${item.name}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Modal ref={modalRef} stock={stock} />

      <div className={styles["search-bar"]}>
        <input
          type="text"
          value={text}
          onChange={onTextChanged}
          className={!openSearch ? styles.closeSearch : styles.openSearch}
          placeholder="Search for stock"
          aria-label="search"
        />
        <button
          className={styles["search-btn"]}
          onClick={() => {
            setOpenSearch(!openSearch);
            setSuggestions([]);
            setText("");
          }}
        >
          {openSearch ? <FaTimes /> : <FaSearch />}
        </button>
      </div>
      {renderSuggestions()}
    </div>
  );
};

export default Search;
