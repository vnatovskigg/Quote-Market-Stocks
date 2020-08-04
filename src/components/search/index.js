import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styles from "./index.module.css";
import TickerSymbols from "../../services/data";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

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

  function suggestionSelected(value) {
    setText(value);
    setSuggestions([]);
  }

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
              onClick={() => suggestionSelected(`${item.name}`)}
            >{`(${item.symbol}) ${item.name}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.container}>
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
          onClick={() => setOpenSearch(!openSearch)}
        >
          {openSearch ? <FaTimes /> : <FaSearch />}
        </button>
      </div>
      {renderSuggestions()}
    </div>
  );
};

export default Search;
