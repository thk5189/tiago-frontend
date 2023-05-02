// import React from "react";
// import '../Home.css';
// import { Link } from "react-router-dom";



// function Home(props) {
//   return (
//     <section className="homeSection">
//       <div className="header-wrapper">
//         <img
//           src="https://i.imgur.com/t0T4XvR.png"
//           alt="Header image"
//           style={{ width: "100%" }}
//         />
//         <div className="header-text">
//           <h1>Tiago H. Kim</h1>
//           <h2>Software Engineering Student</h2>
//         </div>
//       </div>
//       <div className="infoSection">
//         <p>
//           I am an enthusiastic software engineering student with a strong passion for creating
//           modern and efficient web applications. I have experience in both
//           frontend and backend technologies, and I'm always eager to learn new
//           skills and take on exciting challenges.
//         </p>
//         <h2>Highlights</h2>
//         <p>
//           During my time at General Assembly, I developed and deployed multiple
//           full-stack applications using React, Express, and various APIs. I also
//           collaborated on team <Link to="/projects">projects</Link> and contributed to open-source
//           repositories.
//           </p>
//         <h2>Skills</h2>
//         <ul>
//           <li>HTML, CSS, and JavaScript</li>
//           <li>React, Express, and Node.js</li>
//           <li>APIs and RESTful services</li>
//           <li>Version control with Git and GitHub</li>
//         </ul>
     
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from "react";
import '../Home.css';
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <section className="homeSection">
      <div className="header-wrapper">
        <img
          alt="Headerpic"
          src="https://i.imgur.com/t0T4XvR.png"
          style={{ width: "100%" }}
        />

        <div className="header-text">
  <h1>
    Tiago H. Kim
    <span>
          <h2>Software Engineering Student</h2>
    </span>
  </h1>
        </div>

      </div>
      <div className="infoSection">
        <p>
          I am an enthusiastic software engineering student with a strong passion for creating
          modern and efficient web applications. I have experience in both
          frontend and backend technologies, and I'm always eager to learn new
          skills and take on exciting challenges.
        </p>
        <h2>Highlights</h2>
        <p>
          During my time at General Assembly, I developed and deployed multiple
          full-stack applications using React, Express, and various APIs. I also
          collaborated on team <Link to="/projects">projects</Link> and contributed to open-source
          repositories.
          </p>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, and JavaScript</li>
          <li>React, Express, and Node.js</li>
          <li>APIs and RESTful services</li>
          <li>Version control with Git and GitHub</li>
        </ul>
     
      </div>
    </section>
  );
}

export default Home;
