import React from "react";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import styles from "./index.module.css";

const Socials = () => {
  return (
    <ul className={styles["social-list"]}>
      <li className={styles["social-profile"]}>
        <a
          href="https://www.facebook.com/velizar.natovski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
      </li>
      <li className={styles["social-profile"]}>
        <a
          href="https://www.linkedin.com/in/velizar-natovski/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li className={styles["social-profile"]}>
        <a
          href=" https://github.com/vnatovskigg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className={styles["social-profile"]}>
        <a
          href="mailto: vnatovskigg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
