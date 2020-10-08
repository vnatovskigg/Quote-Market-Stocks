import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import Socials from "../social-links";
import ContentWrapper from "../content-wrapper";

function Contact() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

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
      reset();
      setSuccess(!success);
    }
  };

  return (
    <ContentWrapper title="Contact" layout="column">
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

        <textarea placeholder={"Message..."} name="message" ref={register} />

        <div className={styles["submit-div"]}>
          <input
            className={styles["form-submit"]}
            type="submit"
            value={success ? "Message sent !" : "Send Message"}
          />
        </div>
      </form>
      <div className={styles["social-links"]}>
        <Socials />
      </div>
    </ContentWrapper>
  );
}

export default Contact;
