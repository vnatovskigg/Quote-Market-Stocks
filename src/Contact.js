import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/App.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDCQL1lYHqvp6-f6m1zVxNAN9AAYeeOldI",
  //   authDomain: "stock-screener-530fe.firebaseapp.com",
  //   databaseURL: "https://stock-screener-530fe.firebaseio.com",
  //   projectId: "stock-screener-530fe",
  //   storageBucket: "stock-screener-530fe.appspot.com",
  //   messagingSenderId: "547727649233",
  //   appId: "1:547727649233:web:094b2f8d0fe237368c98f0",
  // };

  // firebase.initializeApp(firebaseConfig);

  // var database = firebase.database();

  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);

    // firebase
    //   .database()
    //   .ref("messages/" + data.email)
    //   .set(data);
    e.target.reset();
  };
  return (
    <div className="wrapper">
      <div id="heading">
        <h1>Contact</h1>
      </div>
      <div id="content-contact">
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
          </ul>
        </div>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.name && <span>please provide a name</span>}
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>invalid email address</span>}
          <br />
          <textarea placeholder="Message..." name="message" ref={register} />
          <br />
          <div id="submit-div">
            <input id="form-submit" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
