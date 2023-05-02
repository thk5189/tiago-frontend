import React from "react";
// import "../Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          <span className="thin">Hello. I am</span>{" "}
          <span className="bold">Tiago Kim</span>.
        </h1>

        <h3>
          <span className="thin">Software Engineer</span>
        </h3>
        <p>
          I am an enthusiastic software engineer with a strong passion for creating
          modern and efficient web applications. I have experience in both frontend
          and backend technologies, and I'm always eager to learn new skills and take on
          exciting challenges.
        </p>
        <div className="btn-box">
          <a href="#">Hire Me</a>
          <a href="#">CV</a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://i.imgur.com/mkINS94.png"
          alt="Sample image"
        />
      </div>
    </section>
  );
}

export default Home;
