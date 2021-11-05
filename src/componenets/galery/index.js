import React, { useRef, useState } from "react";
import { ProjectsData } from "../../data";
import "./style.css";

function Galery() {
  const projectId =window.location.pathname.substr(9)
  const images = ProjectsData[projectId].images
  const galleryImg = useRef(null);
  const FirstImg = useRef(null);
  const [sref, setSref] = useState(null);
  const [selected, setSelected] = useState(false);
  function onClickHendler(e) {
    setSelected(!selected);
    galleryImg.current.src = e.target.src;
    
    if (sref) {
      sref.target.style.opacity = 1;
    }else{
      console.log(FirstImg)
     FirstImg.current.style.opacity = 1;
    }
    galleryImg.current.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => galleryImg.current.classList.remove('fade-in'), 500);
    setTimeout(() => setSelected(!selected), 500);
    e.target.style.opacity = 0.6;
    setSref(e);
  }
  return (
    <div class="containerr">
      <div class="main-img">
        <img
          ref={galleryImg}
          src={images[0].img}
          id="current"
          className={selected ? "fade-in" : ""}
        />
      </div>
      <div class="imgs">
        {images.map((image,index) => {
          if (index===0) {
            return  <img src={image.img} onClick={(e) => onClickHendler(e)} style ={{opacity:"0.6"}} ref={FirstImg}/>;
          }else{
            return  <img src={image.img} onClick={(e) => onClickHendler(e)} />;
          }
          
        })}
      </div>
    </div>
  );
}

export default Galery;
