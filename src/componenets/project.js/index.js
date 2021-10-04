import React from "react";
import "./style.css";


function Project({id,img,title,link}) {
  return (
    <div class="box" key={id}>
      <img src={img} alt="" />
      <h3> {title} </h3>
      <div class="icons">
        <a href="#" className="fas fa-link">
        </a>
        <a href="#" className="fas fa-share">
        </a>
        <a href="#" className="fas fa-search">
        </a>
      </div>
    </div>
  );
}

export default Project;
