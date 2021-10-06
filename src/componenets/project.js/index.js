import React from "react";
import "./style.css";

function Project({ id, img, title, link,git }) {
  return (
    <div class="box" key={id}>
      <img src={img} alt="" />
      <h3> {title} </h3>
      <div class="icons">
        <a href={link} className="fas fa-link"></a>
        <a href={git} className="fab  fa-github"></a>
        <a href="#" className="fas fa-search"></a>
      </div>
    </div>
  );
}

export default Project;
