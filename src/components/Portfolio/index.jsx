import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Whadaya',
      description: 'MERN Stack',
      link: "https://github.com/provardjake/Whadaya",
      repo: "https://github.com"
    },
    {
      name: 'ConcertGroupie',
      description: 'MERN Stack',
      link: "https://github.com/shindekokoro/concert-groupie",
      repo: "https://github.com"
    },
    {
      name: 'BookSearch',
      description: 'HTML/CSS',
      link: "https://github.com/merniez10/Book-Search",
      repo: "https://github.com"
    },
    {
      name: 'AllDaLaughs',
      description: 'Node/IoT',
      link: "https://github.com/merniez10/Alldalaughs",
      repo: "https://github.com"
    },
    {
      name: 'NoteTaker',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/merniez10/Note-Taker",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
