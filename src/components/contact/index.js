import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";

import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function Contact() {
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    const promise = await fetch("http://localhost:8888/api/questions", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await promise.json();
    if (res) {
      setMessage("Message received. Thank you!");
      reset();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>Contact</h1>
      </div>
      <div className={styles.content}>
        <form
          className={styles["contact-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true, maxLength: 80 })}
          />

          {errors.name && <span>Minimum of 3 characters</span>}

          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email && <span>Invalid email address</span>}

          <textarea
            placeholder={message || "Message..."}
            name="message"
            ref={register}
          />

          <div className={styles["submit-div"]}>
            <input
              className={styles["form-submit"]}
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
        <div className={styles["social-links"]}>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
