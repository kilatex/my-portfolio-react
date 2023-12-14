import React from 'react';
import { myProjects } from '../assets/myProjects';

export const PortfolioComponent = () => {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="projects">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className='projects-img'>
              <img src={"/img/"+project.id+".png"} alt="" />
            </div>
            <h3>{project.name}</h3>
            <p><strong>Category:</strong> {project.category}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>URL:</strong> <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};


