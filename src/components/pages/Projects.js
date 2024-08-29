import React from 'react';
import { projectsFile } from './ProjectFile';
import Cards from './Cards';
import './Projects.scss';


function Projects() {
  const data = projectsFile;


  return (
    <section className='projects' id='projects'>
      <div className="container">
        <h1>Projects</h1>
        <div className="project-details">
          {data.map((project, index) => {
            return (
              <Cards key={index} project={project} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
