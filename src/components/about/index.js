import React from "react";
import styles from "./index.module.css";
import profilePic from "../../assets/profile-pic.png";

function About() {
  let style = {
    fontStyle: "italic",
    color: "white",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>About</h1>
        <h3>Velizar Natovski</h3>
        <div className={styles["profile-pic"]}>
          <img src={profilePic} />
        </div>
      </div>
      <div className={styles.content}>
        <article className={styles["QnA"]}>
          <h6>What I do?</h6>
          <span>
            I work in sales since 2015. It's one of my passions and a career
            path so far. I am quite good at it too.
          </span>
        </article>
        <article className={styles["QnA"]}>
          <h6>What else am I up to?</h6>
          <span>
            Well, it's exploring and developing solid JS & React skills. I
            wanted to be able to create applications to aid me in my other
            interests, namely capital investing and financial markets.
          </span>
        </article>
        <article className={styles["QnA"]}>
          <h6>Some facts about me I find interesting!</h6>
          <span>
            <p>
              - I am an avid book reader. I enjoy autobiography books. The
              latest one is this of Benjamin Franklin.
            </p>
            <p>- I am an amateur botanist.</p>
            <p>
              - I am also a wannabe beekeeper (that's for some time in the
              future, when I am older).
            </p>
            <p>
              - Lastly, I enjoy the occasional Techno festival. Rocking it to
              Marco Carola in Ibiza or Dubfire in Amsterdam is just... sick.
              Paco Osuna and Hot Since 82 also make the top.
            </p>
          </span>
        </article>
        <article className={styles["QnA"]}>
          <h6>What's with this project?</h6>
          <span>
            <p>
              The original reason I wanted to create it was to have a personal
              stock portfolio tracker for myself.
            </p>
            <p>
              In the process of writing the code I came up with the idea to try
              and showcase as much of the things I have learned in programming
              so far in order for it to serve and aid me in applying for jobs.
            </p>
            <p>
              The code is written from scratch. I've used React and custom css.
              I was trying to showcase my usage of React hooks, Router, HTTP
              requests, etc.
            </p>
            <p>
              The market data is fetched from Alphavantage's API, whilst the
              contact form is making post requests to Firebase.
            </p>
            <p>
              I am especially proud with the way the intuitive search bar came
              to be. In the future I will continue adding features and
              functionalities here to serve my needs. Such include various
              graphs showing historic price movements, P/L tracker and hopefully
              much more.
            </p>
          </span>
        </article>
        <article className={styles["QnA"]}>
          <h6>What is next?</h6>
          <span>Lorem ipsum mofo</span>
        </article>
      </div>
    </div>
  );
}

export default About;
