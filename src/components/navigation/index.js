import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import Search from "../search";
import styles from "./index.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles["nav-ul"]}>
        <li className={styles["nav-li"]}>
          <Search />
        </li>
        <Link to="/about" className={styles["nav-links"]}>
          ABOUT
        </Link>

        <Link to="/contact" className={styles["nav-links"]}>
          CONTACT
        </Link>
        <Link to="/login" className={styles["nav-links"]}>
          LOGIN
        </Link>
        <Link to="/register" className={styles["nav-links"]}>
          REGISTER
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
