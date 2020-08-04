import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import Search from "../search";
import styles from "./index.module.css";
import AutoCompleteSearch from "../auto-complete";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles["nav-ul"]}>
        <li className={styles["nav-li"]}>
          <Search />
          {/* <AutoCompleteSearch /> */}
        </li>
        <Link to="/about" className={styles["nav-links"]}>
          ABOUT
        </Link>

        <Link to="/contact" className={styles["nav-links"]}>
          CONTACT
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
