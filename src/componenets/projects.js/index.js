import React from "react";
import Project from "../project.js";
import "./style.css";

const project = [
  {
    id: "1",
    title: "Food Delivery",
    link: "https://food-delivery.mahioussi.com/",
    img: "images/img4.jpg",
    git:"https://github.com/BRAHAIM360"
  },
  {
    id: "2",
    title: "React Watch",
    link: "https://reactwatch.mahioussi.com/",
    img: "images/imge7.jpg",
    git:"https://github.com/BRAHAIM360"
  },
  {
    id: "3",
    title: "Gestion de Créche",
    link: "https://www.youtube.com/watch?v=5XzuOIIWj6s",
    img: "images/imge3.jpg",
    git:"https://github.com/BRAHAIM360"
  },

  {
    id: "4",
    title: "Animated Visa Card",
    link: "http://animated-payement-visa.mahioussi.com/",
    img: "images/img5.jpg",
    git:"https://github.com/BRAHAIM360"
  },
  {
    id: "5",
    title: "Gestion De la paie",
    link: "https://www.youtube.com/watch?v=dgrD31UikLM",
    img: "images/img6.jpg",
    git:"https://github.com/BRAHAIM360/paie"
  },
  {
    id: "6",
    title: "Mini Cloud VBOX",
    link: "https://github.com/BRAHAIM360",
    img: "images/imge11.jpg",
    git:"https://github.com/BRAHAIM360/MiniCloud"
  },
];

function Projects() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="box-container">
        {project.map((project) => {
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
