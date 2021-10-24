import React from "react";
import ReactTyped from "react-typed";
import Galery from "../galery";
import "./style.css";

function Description() {
  return (
    <div className="desc">
      <div className="max-width">
        <div className="content">
          <div id="left">
            <Galery />
          </div>
          <div id="right">
            <h3>FooD Delivery</h3>
            <div className="tools">
              <div>C#</div>
              <div>javaScript</div>
              <div>css</div>
              <div>html</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
