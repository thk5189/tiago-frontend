// import { useState, useEffect } from "react";
// import '../Projects.css'

// function Projects(props) {
//   const [projects, setProjects] = useState(null);

//   const getProjectsData = async () => {
//     try {
//       const response = await fetch(props.URL + "projects");
//       const data = await response.json();
//       setProjects(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getProjectsData();
//   }, [getProjectsData]);
  

//   const loaded = () => (
//     <div className="projects-container">
//       {projects ? (
//         projects.map((project) => (
//           <div className="project-card" key={project.id}>
//             <h2 className="project-heading">{project.name}</h2>
//             <img className="project-image" src={project.image} alt={project.name} />
//             <a href={project.git}>
//               <button className="project-button">Github</button>
//             </a>
//             <a href={project.live}>
//               <button className="project-button">Live Site</button>
//             </a>
//           </div>
//         ))
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );

//   return loaded();
// }

// export default Projects;

import { useState, useEffect } from "react";
import '../Projects.css'

function Projects(props) {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
  const getProjectsData = async () => {
    try {
      const response = await fetch(props.URL + "projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };
    getProjectsData();
  }, [props.URL]);

  const loaded = () => (
    <div className="projects-container">
      {projects ? (
        projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2 className="project-heading">{project.name}</h2>
            <img className="project-image" src={project.image} alt={project.name} />
            <a href={project.git}>
              <button className="project-button">Github</button>
            </a>
            <a href={project.live}>
              <button className="project-button">Live Site</button>
            </a>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );

  return loaded();
}

export default Projects;
