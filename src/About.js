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
        <h1>About</h1>
        <div id="profile-pic">
          <img src={profilePic} />
        </div>
      </div>
      <div id="content">
        <div id="content-left">
          <p>Hi and thanks for browsing. My name is Velizar.</p> <br></br>
          <p>
            <span style={style}>What I do?</span>
            <br /> <br />
            <span>
              - I work in sales since 2015. It's one of my passions and a career
              path so far. I am quite good at it too.
            </span>
          </p>
          <br /> <br />
          <p>
            <span style={style}>What else am I up to?</span>
            <br /> <br />
            <span>
              - Well, it's JS & React namely. I started out in order to be able
              to create application to aid me in my other interests, namely
              capital investing and financial markets.
            </span>
          </p>
          <br /> <br />
          <p>
            <span style={style}>Some facts about me I find interesting</span>
            <br /> <br />
            <span>
              - I am an avid book reader. I enjoy autobiography books. The
              latest one is this of Benjamin Franklin.
            </span>{" "}
            <br />
            <br />
          </p>
          <p>- I am an amateur botanist.</p> <br />
          <p>
            - I am also a wannabe beekeeper (that's for some time in the future,
            when I am older).
          </p>{" "}
          <br />
          <p>
            - Lastly, I enjoy the occasional Techno festival. I've been to
            Amsterdam, Ibiza and others. My favourite DJs are Marco Carola, Paco
            Osuna, Hot Since 82 and more.
          </p>{" "}
          <br />
        </div>
        <div id="content-right">
          <p>A few words about this project...</p>
          <br />
          <p>
            The original reason I wanted to create it was to have a personal
            stock portfolio tracker for myself.
          </p>
          <br />
          <p>
            In the process of writing the code I came up with the idea to try
            and showcase as much of the things I have learned in programming so
            far in order for it to serve and aid me in applying for jobs.
          </p>
          <br />
          <p>
            The code is written from scratch. I've used React and custom css. I
            was trying to showcase my usage of React hooks, Router, HTTP
            requests, etc.
          </p>
          <br />
          <p>
            The market data is fetched from Alphavantage's API, whilst the
            contact form is making post requests to Firebase.
          </p>
          <br />
          <p>
            I am especially proud with the way the intuitive search bar came to
            be. In the future I will continue adding features and
            functionalities here to serve my needs. Such include various graphs
            showing historic price movements, P/L tracker and hopefully much
            more.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
