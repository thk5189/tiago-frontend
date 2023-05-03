import React from "react";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          <span className="thin">Hello, I am</span>{" "}
          <span className="bold">Tiago Kim</span>.
        </h1>
        <h3>
          <span className="thin">Software Engineer</span>
        </h3>
        <p>
          I have a strong passion for designing and developing modern, efficient web applications. With experience in both frontend and backend technologies, I am constantly seeking to expand my skills and take on new, exciting challenges.
        </p>
        <div className="btn-box">
          <a href="/hire-me">Hire Me</a>
          <a href="/cv">CV</a>
        </div>
      </div>
      <div className="image-container">
        <img src="https://i.imgur.com/DBaeCY1.png" alt="Triangular Bird Logo" />
      </div>
    </section>
  );
}

export default Home;

