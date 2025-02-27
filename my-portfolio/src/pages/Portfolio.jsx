import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        <div className="project">
          <h2>Project 1: [Project Name]</h2>
          <p>Short description of the project.</p>
          <a href="[Link to Project]" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="project">
          <h2>Project 2: [Project Name]</h2>
          <p>Short description of the project.</p>
          <a href="[Link to Project]" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Portfolio;