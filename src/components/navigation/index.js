import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import Search from "../search";
import styles from "./index.module.css";
import { getNavigation } from "../../services/navigation";
import UserContext from "../../Context";

const Nav = () => {
  const context = useContext(UserContext);
  const links = getNavigation(context.user);
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles["nav-ul"]}>
        <li className={styles["nav-li"]}>
          <Search />
        </li>
        {links.map((nav, i) => {
          return (
            <Link to={`${nav.link}`} className={styles["nav-links"]} key={i}>
              {`${nav.title}`}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
