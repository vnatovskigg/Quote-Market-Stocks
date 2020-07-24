import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/App.css";
import sendMessage from "../src/controllers/db.js";

import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    sendMessage(data);
    e.target.reset();
  };
  return (
    <div className="wrapper">
      <div id="heading">
        <h1>Contact</h1>
      </div>
      <div id="content">
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true, maxLength: 80 })}
          />

          {errors.name && <span>Please enter a name</span>}

          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email && <span>Please enter a valid email address</span>}

          <textarea placeholder="Message..." name="message" ref={register} />

          <div id="submit-div">
            <input id="form-submit" type="submit" value="Send Message" />
          </div>
        </form>
        <div id="social-links">
          <ul id="social-list">
            <li className="social-profile">
              <a
                href="https://www.facebook.com/velizar.natovski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-profile">
              <a
                href="https://www.linkedin.com/in/velizar-natovski/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-profile">
              <a
                href=" https://github.com/vnatovskigg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-profile">
              <a
                href="mailto: v.natovskigg@abv.bg"
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
