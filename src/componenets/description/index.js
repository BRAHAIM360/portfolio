import React from "react";
import Galery from "../galery";
import "./style.css";
import {ProjectsData} from '../../data'
import { useTranslation } from "react-i18next";

function Description() {
  const projectId =window.location.pathname.substr(9)
  const { t} = useTranslation();
  
  return (
    <div className="desc">
      <div className="max-width">
        <div className="content">
          <div id="left">
            <Galery images={ProjectsData[projectId].images} />
          </div>
          <div id="right">
            <h3>{ProjectsData[projectId].title} </h3>
            <div className="tools">
             {ProjectsData[projectId].tags.map(tag=>(<div>{tag}</div>))}
            </div>
            <p>
             {t(ProjectsData[projectId].desc)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
