import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="nav">
      <h3 className="logo">Logo</h3>
      <ul>
        <li>
          <div className="search-bar">
            <input
              type="text"
              className={openSearch === false ? "closedSearch" : "openedSearch"}
              placeholder="Search..."
              aria-label="search"
            />
            <button
              className="search-btn"
              onClick={() => setOpenSearch(!openSearch)}
            >
              {openSearch ? <FaTimes /> : <FaSearch />}
            </button>
          </div>
        </li>
        <Link to="/about" className="nav-links">
          ABOUT
        </Link>

        <Link to="/contact" className="nav-links">
          CONTACT
        </Link>
      </ul>
    </nav>
  );
}
