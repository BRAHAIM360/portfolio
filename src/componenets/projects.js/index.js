import React from "react";
import Project from "../project.js";
import "./style.css";
import {ProjectsData} from '../../data'


function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="box-container">
        {ProjectsData.map((project) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              img={project.img}
              title={project.title}
              link={project.link}
              git={project.git}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
