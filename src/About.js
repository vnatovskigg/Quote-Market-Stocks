import React from "react";
import "./styles/App.css";
import profilePic from "./assets/profile-pic.png";

function About() {
  let style = {
    fontStyle: "italic",
    color: "white",
  };

  return (
    <div className="wrapper">
      <div id="heading">
        <h1>About the Author</h1>
        <h3>Who is Velizar Natovski</h3>
        <div id="profile-pic">
          <img src={profilePic} />
        </div>
      </div>
      <div id="content">
        <h6 style={style}>What I do?</h6>
        <h6 style={style}>What else am I up to?</h6>
        <h6 style={style}>Some facts about me I find interesting!</h6>
        <h6 style={style}>What's with this project?</h6>
        <h6 style={style}>What is next?</h6>
      </div>
    </div>
  );
}

export default About;
