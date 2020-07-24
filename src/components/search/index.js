import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import styles from "./index.module.css";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        className={!openSearch ? styles.closeSearch : styles.openSearch}
        placeholder="Search..."
        aria-label="search"
      />
      <button
        className={styles["search-btn"]}
        onClick={() => setOpenSearch(!openSearch)}
      >
        {openSearch ? <FaTimes /> : <FaSearch />}
      </button>
    </div>
  );
};

export default Search;
