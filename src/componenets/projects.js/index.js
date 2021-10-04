import React from 'react'
import Project from '../project.js';
import './style.css'

const project = [
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/imge3.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-2.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/imge2.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-4.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-5.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-6.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-2.jpg",
    },
    {
      id: "1",
      title: "Food Delivery",
      link: "",
      img: "images/img-1.jpg",
    },
  ];

function Projects() {
    return (
        
<section className="portfolio" id="portfolio">


<div className="box-container">
{project.map((project)=>{
    return(
        <Project id={project.id}img={project.img}title={project.title}link={project.link}/>
    )
})}


</div>

</section>
    )
}

export default Projects
