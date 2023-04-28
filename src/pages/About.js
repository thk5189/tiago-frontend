// import { useState, useEffect } from "react";
// import "../About.css";

// function About(props) {
//   const [about, setAbout] = useState(null);

//   const getAboutData = async () => {
//     const response = await fetch(props.URL + "about");
//     const data = await response.json();
//     setAbout(data);
//   };

//   useEffect(() => {
//     getAboutData();
//   }, [getAboutData]);
  

//   const loaded = () => (
//     <div className="about-container">
//       {about ? (
//         <>
//           <div className="profile-image">
//             <img src="https://i.imgur.com/rUMFMeO.png" alt="Profile" />
//           </div>
//           <div className="about-info">
//             <h2 className="about-heading">{about.name}</h2>
//             <h3 className="about-subheading">{about.email}</h3>
//             <p className="about-text">{about.bio}</p>
//           </div>
//         </>
//       ) : (
//         <h1 className="loading-text">Loading...</h1>
//       )}
//     </div>
//   );

//   return loaded();
// }

// export default About;

import { useState, useEffect, useCallback } from "react";
import "../About.css";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = useCallback(async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    setAbout(data);
  }, [props.URL]);

  useEffect(() => {
    getAboutData();
  }, [getAboutData]);

  const loaded = () => (
    <div className="about-container">
      {about ? (
        <>
          <div className="profile-image">
            <img src="https://i.imgur.com/rUMFMeO.png" alt="Profile" />
          </div>
          <div className="about-info">
            <h2 className="about-heading">{about.name}</h2>
            <h3 className="about-subheading">{about.email}</h3>
            <p className="about-text">{about.bio}</p>
          </div>
        </>
      ) : (
        <h1 className="loading-text">Loading...</h1>
      )}
    </div>
  );

  return loaded();
}

export default About;
