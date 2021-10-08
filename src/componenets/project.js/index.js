import React from "react";
import "./style.css";

function Project({ id, img, title, link,git }) {
  return (
    <div className="box" key={id}>
      <img src={img} alt="" />
      <h3> {title} </h3>
      <div className="icons">
        <a href={link} className="fas fa-link"></a>
        <a href={git} className="fab  fa-github"></a>
        <a href="#" className="fas fa-search"></a>
      </div>
    </div>
  );
}

export default Project;
